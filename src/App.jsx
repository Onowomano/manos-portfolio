import Hero from "./components/Hero";
import SectionHeading from "./components/SectionHeading";
import ProjectCard from "./components/ProjectCard";
import PersonalCard from "./components/PersonalCard";
import ListRow from "./components/ListRow";
import {
  workProjects,
  personalProjects,
  playgroundItems,
  articles,
  sayHello,
} from "./data/home";

function App() {
  return (
    <main className="mx-auto flex w-full max-w-[560px] flex-col gap-[48px] px-4 md:px-6 pt-46 pb-24 md:py-24">
      <Hero />

      <section className="flex flex-col gap-[36px]">
        <SectionHeading>Work</SectionHeading>
        <div className="flex flex-col gap-[32px]">
          {workProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[14px]">
        <SectionHeading>Personal</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {personalProjects.map((project) => (
            <PersonalCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[14px]">
        <SectionHeading>Playground</SectionHeading>
        <div className="flex flex-col gap-[6px]">
          {playgroundItems.map((item) => (
            <ListRow
              key={item.title}
              title={item.title}
              meta={item.year}
              href={item.href}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[14px]">
        <SectionHeading>Articles</SectionHeading>
        <div className="flex flex-col gap-[6px]">
          {articles.map((article) => (
            <ListRow
              key={article.title}
              title={article.title}
              meta={article.readTime}
              href={article.href}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[14px]">
        <SectionHeading>Say hello</SectionHeading>
        <div className="flex flex-col items-start gap-[6px] text-link-md text-text-primary">
          <a href={sayHello.email} className="underline decoration-[#d4d5d7]">
            milueziogbaudu@gmail.com
          </a>
          <a
            href={sayHello.linkedin}
            className="underline decoration-[#d4d5d7]"
          >
            Linkedin
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
