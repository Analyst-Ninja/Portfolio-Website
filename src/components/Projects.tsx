import { projects } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const rest = projects.filter((p) => p.slug !== "aurum");
  return (
    <section className="pb-24 sm:pb-32">
      <div className="container-page">
        <SectionTitle
          index="05"
          eyebrow="Selected work"
          title={
            <>
              Built on my own time, <span className="font-serif font-normal italic text-muted-foreground">for the craft.</span>
            </>
          }
          body="Personal builds where I go deeper than any one job allows — lakehouses, streaming systems, ETL and data APIs."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
