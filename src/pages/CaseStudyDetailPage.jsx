import { Suspense, lazy, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CornerUpLeftLine } from "@mingcute/react";
import Gallery from "../components/Gallery";
import CaseStudyCodeGate, {
  isCaseStudyUnlocked,
} from "../components/CaseStudyCodeGate";
import { getCaseStudyBySlug } from "../data/caseStudies";
import { caseStudyMdxComponents } from "../case-studies/mdxComponents";

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);
  const [unlocked, setUnlocked] = useState(
    () => !study?.isPasswordProtected || isCaseStudyUnlocked(slug),
  );
  const LazyBody = useMemo(
    () => (study?.loadBody ? lazy(study.loadBody) : null),
    [study?.slug, study?.loadBody],
  );

  if (!study) {
    return (
      <main className="mx-auto flex w-full max-w-[560px] flex-col gap-[24px] px-4 md:px-6 pt-46 pb-24 md:py-24">
        <p className="text-body-lg text-text-tertiary">Case study not found.</p>
        <Link
          to="/case-studies"
          className="link-underline text-link-md text-text-primary"
        >
          Back to case studies
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-[560px] flex-col gap-[28px] px-4 md:px-6 pt-46 pb-24 md:py-24">
      <Link
        to="/case-studies"
        className="link-underline flex w-fit items-center gap-[4px] text-link-sm text-text-tertiary"
      >
        <CornerUpLeftLine className="size-[14px]" />
        Back
      </Link>

      {unlocked ? (
        <>
          <div className="flex flex-col gap-[10px]">
            <Gallery images={study.images} badge={study.badge} />
          </div>

          <div className="flex flex-col gap-[20px]">
            <p className="text-[14px] leading-[22px] tracking-[-0.28px] text-text-primary">
              {study.title}
            </p>
            <div className="case-study-content flex flex-col">
              {LazyBody && (
                <Suspense fallback={null}>
                  <LazyBody components={caseStudyMdxComponents} />
                </Suspense>
              )}
            </div>
          </div>
        </>
      ) : (
        <CaseStudyCodeGate
          slug={study.slug}
          codeHashes={study.codeHashes}
          codeLength={study.codeLength}
          onUnlock={() => setUnlocked(true)}
        />
      )}
    </main>
  );
}
