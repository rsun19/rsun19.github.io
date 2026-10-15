import React from "react";
import { FaGithub } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { projects } from "../data";
import { Project } from "../types";
import Section from "./Section";
import Tag from "./Tag";

const ProjectCard = ({
  title,
  blurb,
  tech,
  links,
  date,
  featured,
}: Project): React.JSX.Element => {
  return (
    <article
      className={`group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-accent/50 motion-reduce:hover:translate-y-0 ${
        featured
          ? "bg-gradient-to-br from-accent/10 via-surface to-surface md:col-span-2 md:p-8 lg:col-span-3"
          : ""
      }`}
    >
      {featured && (
        <p className="mb-3 font-mono text-xs tracking-wide text-accent uppercase">
          Featured project{date ? ` · ${date}` : ""}
        </p>
      )}
      <h3
        className={`font-semibold text-fg ${featured ? "text-2xl" : "text-lg"}`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 flex-1 leading-relaxed text-muted ${
          featured ? "max-w-3xl text-base md:text-lg" : "text-sm"
        }`}
      >
        {blurb}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        {links.map(({ name, link }) => {
          const isGithub = link.startsWith("https://github.com/");
          return (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
            >
              {isGithub ? (
                <FaGithub className="size-4" aria-hidden />
              ) : (
                <LuArrowUpRight className="size-4" aria-hidden />
              )}
              {name}
              <span className="sr-only"> for {title}</span>
            </a>
          );
        })}
      </div>
    </article>
  );
};

const Projects = (): React.JSX.Element => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
