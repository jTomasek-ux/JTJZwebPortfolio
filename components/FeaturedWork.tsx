import Image from "next/image";
import { PROJECTS } from "@/lib/content";

type Project = (typeof PROJECTS)[number];

function ProjectFeature({ project }: { project: Project }) {
  return (
    <article className="relative bg-paper px-[4vw] pb-24 pt-[14vh]">
      <h2 className="display relative z-10 text-[clamp(48px,12vw,200px)]">{project.name}</h2>

      <div className="mt-6 grid items-end gap-10 lg:grid-cols-12">
        <dl className="space-y-5 lg:col-span-3">
          <div>
            <dt className="nav-meta">Services</dt>
            <dd className="mt-1 text-[12px] uppercase tracking-[0.06em]">
              {project.services.join(", ")}
            </dd>
          </div>
          <div>
            <dt className="nav-meta">Field</dt>
            <dd className="mt-1 text-[12px] uppercase tracking-[0.06em]">{project.field}</dd>
          </div>
          <div>
            <dt className="nav-meta">Year</dt>
            <dd className="mt-1 text-[12px] uppercase tracking-[0.06em]">{project.year}</dd>
          </div>
        </dl>

        <div className="relative aspect-video overflow-hidden bg-panel lg:col-span-9">
          <Image
            src={project.image}
            alt={`${project.name} website`}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 70vw, 92vw"
            quality={80}
          />
        </div>
      </div>
    </article>
  );
}

export function FeaturedWork() {
  return (
    <section>
      {PROJECTS.map((project) => (
        <ProjectFeature key={project.name} project={project} />
      ))}
    </section>
  );
}
