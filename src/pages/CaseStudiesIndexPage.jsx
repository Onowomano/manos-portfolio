import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import CategoryFilter from "../components/CategoryFilter";
import { getAllCaseStudies } from "../data/caseStudies";

export default function CaseStudiesIndexPage() {
  const studies = getAllCaseStudies();
  const categoryOrder = ["mobile", "web", "interactions"];
  const availableCategories = new Set(studies.flatMap((study) => study.categories));
  const categories = categoryOrder.filter((category) => availableCategories.has(category));
  const [active, setActive] = useState("all");
  const filtered =
    active === "all" ? studies : studies.filter((study) => study.categories.includes(active));

  return (
    <main className="mx-auto flex w-full max-w-[560px] flex-col gap-[48px] px-4 md:px-6 pt-46 pb-24 md:py-24">
      <section className="flex flex-col gap-[14px]">
        <SectionHeading>Case studies ({filtered.length})</SectionHeading>
        <CategoryFilter categories={categories} active={active} onChange={setActive} />
        <div className="flex flex-col gap-[32px]">
          {filtered.map((study) => (
            <ProjectCard
              key={study.slug}
              title={study.title}
              description={study.description}
              badge={study.badge}
              images={study.images}
              to={`/case-studies/${study.slug}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
