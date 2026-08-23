import { useLayoutEffect, useRef, useState } from "react";

export default function CategoryFilter({ categories, active, onChange }) {
  const tabs = ["all", ...categories];
  const buttonRefs = useRef({});
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });

  useLayoutEffect(() => {
    const activeButton = buttonRefs.current[active];
    if (activeButton) {
      setPill({ left: activeButton.offsetLeft, width: activeButton.offsetWidth, ready: true });
    }
  }, [active, categories]);

  return (
    <div className="relative flex items-center gap-[8px]">
      <div
        aria-hidden="true"
        className={`absolute top-0 h-full rounded-[999px] bg-bg-primary transition-[transform,width] duration-300 ease-out ${
          pill.ready ? "opacity-100" : "opacity-0"
        }`}
        style={{ width: pill.width, transform: `translateX(${pill.left}px)` }}
      />
      {tabs.map((tab) => (
        <button
          key={tab}
          ref={(el) => {
            buttonRefs.current[tab] = el;
          }}
          type="button"
          onClick={() => onChange(tab)}
          aria-pressed={active === tab}
          className="relative z-10 flex items-center justify-center rounded-[999px] px-[10px] py-[4px] text-body-lg text-text-primary"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
