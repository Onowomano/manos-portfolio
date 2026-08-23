import { useEffect, useState } from "react";
import { LeftLine, RightLine } from "@mingcute/react";
import { useThemeMode } from "../hooks/useTheme";

const VIDEO_EXTENSION_PATTERN = /\.(mp4|webm|mov)$/i;
const OFFSET_PERCENT = 6;
const EASE = "cubic-bezier(0.23,1,0.32,1)";
const BASE_CLASS = "absolute inset-0 size-full object-cover";
const TRANSITION_CLASS =
  "transition-[opacity,transform] duration-200 motion-reduce:transition-opacity";

function isVideoItem(item) {
  return item.type === "video" || VIDEO_EXTENSION_PATTERN.test(item.src);
}

// Items can carry a `darkSrc` to swap in for dark mode; resolve it once per
// render so the rest of the component only ever deals in plain `src`.
function resolveItemForTheme(item, theme) {
  return theme === "dark" && item.darkSrc ? { ...item, src: item.darkSrc } : item;
}

// Mounts at `from`, then flips to `to` on the next frame so the browser has
// something to transition from (the modern equivalent of @starting-style).
function useEnterTransition(from, to) {
  const [style, setStyle] = useState(from);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setStyle(to));
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return style;
}

function GalleryMedia({ item, style, onTransitionEnd }) {
  const mergedStyle = { ...style, transitionTimingFunction: EASE };

  return isVideoItem(item) ? (
    <video
      src={item.src}
      className={`${BASE_CLASS} ${TRANSITION_CLASS}`}
      style={mergedStyle}
      onTransitionEnd={onTransitionEnd}
      autoPlay
      loop
      muted
      playsInline
    />
  ) : (
    <img
      src={item.src}
      alt={item.alt}
      className={`${BASE_CLASS} ${TRANSITION_CLASS}`}
      style={mergedStyle}
      onTransitionEnd={onTransitionEnd}
    />
  );
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function EnteringMedia({ item, direction, onTransitionEnd }) {
  const offset = prefersReducedMotion() ? 0 : direction * OFFSET_PERCENT;
  const style = useEnterTransition(
    { opacity: 0, transform: `translateX(${offset}%)` },
    { opacity: 1, transform: "translateX(0%)" },
  );
  return (
    <GalleryMedia item={item} style={style} onTransitionEnd={onTransitionEnd} />
  );
}

function LeavingMedia({ item, direction, onTransitionEnd }) {
  const offset = prefersReducedMotion() ? 0 : direction * -OFFSET_PERCENT;
  const style = useEnterTransition(
    { opacity: 1, transform: "translateX(0%)" },
    { opacity: 0, transform: `translateX(${offset}%)` },
  );
  return (
    <GalleryMedia item={item} style={style} onTransitionEnd={onTransitionEnd} />
  );
}

export default function Gallery({ images, badge, showArrows = true }) {
  const [index, setIndex] = useState(0);
  const [outgoing, setOutgoing] = useState(null);
  const theme = useThemeMode();
  const current = images[index] && resolveItemForTheme(images[index], theme);

  function navigate(nextIndex, direction) {
    if (images.length === 0) return;
    setOutgoing({ item: images[index], direction });
    setIndex(nextIndex);
  }

  function showPrev() {
    navigate((index - 1 + images.length) % images.length, -1);
  }

  function showNext() {
    navigate((index + 1) % images.length, 1);
  }

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-[6px] bg-bg-primary">
      {outgoing && (
        <LeavingMedia
          key={`out-${outgoing.item.src}`}
          item={resolveItemForTheme(outgoing.item, theme)}
          direction={outgoing.direction}
          onTransitionEnd={() => setOutgoing(null)}
        />
      )}
      {current &&
        (outgoing ? (
          <EnteringMedia
            key={`in-${index}-${current.src}`}
            item={current}
            direction={outgoing.direction}
          />
        ) : (
          <GalleryMedia
            key={`in-${index}-${current.src}`}
            item={current}
            style={{ opacity: 1, transform: "translateX(0%)" }}
          />
        ))}

      {badge && (
        <div className="absolute top-[14px] left-[14px] z-10 size-[32px] overflow-hidden rounded-[6px]">
          <img
            src={badge.src}
            alt={badge.alt}
            className="size-full object-cover"
          />
        </div>
      )}

      {showArrows && (
        <div className="absolute top-[14px] right-[14px] z-10 flex items-center gap-[8px] opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
          <button
            type="button"
            aria-label="Previous image"
            onClick={showPrev}
            className="cursor-pointer flex size-[28px] items-center justify-center rounded-full bg-bg-surface p-[4px] text-text-primary"
          >
            <LeftLine className="size-[20px]" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={showNext}
            className="cursor-pointer flex size-[28px] items-center justify-center rounded-full bg-bg-surface p-[4px] text-text-primary"
          >
            <RightLine className="size-[20px]" />
          </button>
        </div>
      )}
    </div>
  );
}
