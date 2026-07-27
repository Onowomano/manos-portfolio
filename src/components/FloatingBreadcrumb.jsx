import { useLocation, useParams } from "react-router-dom";
import { Home2Fill, SignatureFill } from "@mingcute/react";

export default function FloatingBreadcrumb() {
  const { pathname } = useLocation();
  const { slug } = useParams();

  if (slug) return null;

  const isNotes = pathname === "/notes";
  const label = isNotes ? "notes" : "home";
  const Icon = isNotes ? SignatureFill : Home2Fill;

  return (
    <div
      className="fixed bottom-[30px] left-1/2 -translate-x-1/2 flex items-center gap-[4px] rounded-full border-[0.5px] border-border-secondary bg-bg-white py-[5px] pl-[14px] pr-[5px] z-[1]"
      style={{
        boxShadow:
          "0px 16px 8px rgba(0,0,0,0.06), 0px 2px 4px rgba(0,0,0,0.08)",
      }}
    >
      {/* 14px/18px/-0.28px is a local override in the design, not the link/md
          text style (which is 14px/22px/-0.14px) — matched here as-is. */}
      <p className="text-[14px] leading-[18px] tracking-[-0.28px] text-text-tertiary">
        mano
      </p>
      <p className="text-[14px] leading-[18px] tracking-[-0.28px] text-text-tertiary">
        /
      </p>
      <div className="flex items-center gap-[4px] rounded-full bg-bg-primary px-[8px] py-[6px]">
        <Icon className="size-[14px] text-text-primary" />
        <p className="text-[14px] leading-[18px] tracking-[-0.28px] text-text-primary">
          {label}
        </p>
      </div>
    </div>
  );
}
