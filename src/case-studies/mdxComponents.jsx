import { Children, isValidElement, useEffect, useRef, useState } from "react";
import MdxLink from "../components/MdxLink";
import placeholderImage from "../assets/case-study-placeholder.svg";

// Some static hosts (and Vite's own dev/preview server) rewrite *any*
// unmatched path to index.html for SPA routing, rather than 404ing — so a
// missing body image can return 200 text/html and never fire <img onError>.
// A timeout is the only reliable fallback signal in that case.
const MISSING_IMAGE_TIMEOUT_MS = 4000;

function Heading2(props) {
  return <h2 {...props} />;
}

function Heading3(props) {
  return <h3 {...props} />;
}

function Hr() {
  return null;
}

function MdxImage({ src, alt }) {
  const [resolvedSrc, setResolvedSrc] = useState(src);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setResolvedSrc(src);
    timeoutRef.current = setTimeout(() => setResolvedSrc(placeholderImage), MISSING_IMAGE_TIMEOUT_MS);
    return () => clearTimeout(timeoutRef.current);
  }, [src]);

  function handleError() {
    clearTimeout(timeoutRef.current);
    setResolvedSrc(placeholderImage);
  }

  return (
    <figure className="flex flex-col gap-[10px]">
      <img
        src={resolvedSrc}
        alt={alt}
        className="w-full rounded-[6px] object-cover"
        onLoad={() => clearTimeout(timeoutRef.current)}
        onError={handleError}
      />
      {alt && (
        <figcaption className="text-center text-[12px] leading-[18px] tracking-[-0.12px] text-text-tertiary">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}

// Markdown wraps a lone image in a <p>, but MdxImage renders a <figure> —
// a block element can't nest inside a <p>, so unwrap that specific case.
function MdxParagraph({ children }) {
  const childArray = Children.toArray(children);
  if (childArray.length === 1 && isValidElement(childArray[0]) && childArray[0].type === MdxImage) {
    return children;
  }
  return <p>{children}</p>;
}

function Vimeo({ id, title, height, maxheight }) {
  const style = height
    ? { height, maxHeight: maxheight ?? height }
    : { aspectRatio: "16 / 9" };

  return (
    <div className="w-full overflow-hidden rounded-[6px] bg-bg-primary" style={style}>
      <iframe
        src={`https://player.vimeo.com/video/${id}`}
        title={title}
        className="size-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        allowFullScreen
      />
    </div>
  );
}

export const caseStudyMdxComponents = {
  h1: Heading2,
  h2: Heading2,
  h3: Heading3,
  a: MdxLink,
  p: MdxParagraph,
  img: MdxImage,
  hr: Hr,
  Vimeo,
};
