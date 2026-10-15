import React from "react";
import { about, education, skills } from "../data";
import Section from "./Section";

const About = (): React.JSX.Element => {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <dl className="mt-10 grid max-w-3xl gap-x-8 gap-y-4 sm:grid-cols-[10rem_1fr]">
        <dt className="text-muted">Education</dt>
        <dd>
          {education.school}, {education.degree}, {education.date} ·{" "}
          {education.detail}
        </dd>
        {skills.map((group) => (
          <React.Fragment key={group.label}>
            <dt className="text-muted">{group.label}</dt>
            <dd>{group.items.join(", ")}</dd>
          </React.Fragment>
        ))}
      </dl>
    </Section>
  );
};

export default About;
