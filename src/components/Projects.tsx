import React from "react";
import { projects } from "../data";
import { Project } from "../types";
import Section from "./Section";

const ProjectCard = ({
  title,
  blurb,
  tech,
  links,
  date,
}: Project): React.JSX.Element => {
  return (
    <article className="flex h-full flex-col border border-border bg-surface p-6 first:md:col-span-2 first:lg:col-span-3">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {date && (
          <p className="shrink-0 font-mono text-sm text-muted">{date}</p>
        )}
      </div>
      <p className="mt-3 max-w-3xl flex-1 leading-relaxed text-muted">
        {blurb}
      </p>
      <p className="mt-4 text-sm text-muted">{tech.join(", ")}</p>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {links.map(({ name, link }) => (
          <li key={link}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              {name} ↗<span className="sr-only"> ({title})</span>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

const Projects = (): React.JSX.Element => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
