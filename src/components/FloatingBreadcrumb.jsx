import { useLocation, useParams } from "react-router-dom";
import { Home2Fill, SignatureFill, Book6Fill } from "@mingcute/react";

function Crumb({ tertiary, children }) {
  return (
    // 14px/18px/-0.28px is a local override in the design, not the link/md
    // text style (which is 14px/22px/-0.14px) — matched here as-is.
    <p
      className={`shrink-0 whitespace-nowrap text-[14px] leading-[18px] tracking-[-0.28px] ${
        tertiary ? "text-text-tertiary" : "text-text-primary"
      }`}
    >
      {children}
    </p>
  );
}

export default function FloatingBreadcrumb() {
  const { pathname } = useLocation();
  const { slug } = useParams();

  const isNoteDetail = slug && pathname.startsWith("/notes/");
  const isCaseStudyDetail = slug && pathname.startsWith("/case-studies/");

  if (isNoteDetail) return null;

  const isNotes = pathname === "/notes";
  const isCaseStudies = pathname === "/case-studies" || isCaseStudyDetail;
  const label = isCaseStudyDetail ? slug : isNotes ? "notes" : isCaseStudies ? "case studies" : "home";
  const Icon = isNotes ? SignatureFill : isCaseStudies ? Book6Fill : Home2Fill;

  return (
    <div
      className="fixed bottom-[30px] left-1/2 -translate-x-1/2 flex w-max max-w-[calc(100vw-32px)] items-center gap-[4px] rounded-full border-[0.5px] border-border-secondary bg-bg-white py-[5px] pl-[14px] pr-[5px] z-[1]"
      style={{
        boxShadow:
          "0px 16px 8px rgba(0,0,0,0.06), 0px 2px 4px rgba(0,0,0,0.08)",
      }}
    >
      <Crumb tertiary>mano</Crumb>
      <Crumb tertiary>/</Crumb>
      {isCaseStudyDetail && (
        <>
          <Crumb tertiary>Case studies</Crumb>
          <Crumb tertiary>/</Crumb>
        </>
      )}
      <div className="flex shrink-0 items-center gap-[4px] rounded-full bg-bg-primary px-[8px] py-[6px]">
        <Icon className="size-[14px] shrink-0 text-text-primary" />
        <p className="whitespace-nowrap text-[14px] leading-[18px] tracking-[-0.28px] text-text-primary">
          {label}
        </p>
      </div>
    </div>
  );
}
