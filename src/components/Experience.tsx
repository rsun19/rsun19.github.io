import React from "react";
import { experience } from "../data";
import Section from "./Section";
import Tag from "./Tag";

const Experience = (): React.JSX.Element => {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-12 border-l border-border pl-6 md:pl-8">
        {experience.map((job) => (
          <li key={job.id} className="relative">
            <span
              className="absolute top-2 -left-[calc(1.5rem+4.5px)] size-2 rounded-full bg-accent ring-4 ring-bg md:-left-[calc(2rem+4.5px)]"
              aria-hidden
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-lg font-semibold text-fg">
                {job.role} <span className="text-accent">· {job.company}</span>
              </h3>
              <p className="shrink-0 font-mono text-sm text-muted">
                {job.date}
              </p>
            </div>
            <p className="mt-1 text-sm text-muted">
              {job.team ? `${job.team} team · ` : ""}
              {job.location}
            </p>
            <ul className="mt-4 space-y-2.5">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-5 leading-relaxed text-muted before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-accent/60"
                >
                  {bullet}
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
              {job.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
