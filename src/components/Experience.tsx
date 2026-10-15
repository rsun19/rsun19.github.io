import React from "react";
import { experience } from "../data";
import Section from "./Section";

const Experience = (): React.JSX.Element => {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((job) => (
          <li
            key={job.id}
            className="grid gap-x-8 gap-y-2 md:grid-cols-[10rem_1fr]"
          >
            <p className="font-mono text-sm text-muted md:pt-1">{job.date}</p>
            <div>
              <h3 className="text-lg font-semibold">
                {job.role}, {job.company}
              </h3>
              <p className="text-muted">
                {job.team ? `${job.team} team · ` : ""}
                {job.location}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-muted">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">{job.tech.join(", ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
