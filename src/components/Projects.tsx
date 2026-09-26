import { projects } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const rest = projects.filter((p) => p.slug !== "aurum");
  return (
    <section className="pb-24 sm:pb-32">
      <div className="container-page">
        <SectionTitle
          index="02"
          eyebrow="Selected work"
          title={
            <>
              Lakehouses, streams <span className="font-serif font-normal italic text-muted-foreground">&amp;</span> AI interfaces.
            </>
          }
          body="From open-table-format lakehouses to an MCP server that lets LLMs query them — plus the streaming and ETL systems where I learned the craft."
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
