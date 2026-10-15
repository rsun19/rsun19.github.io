import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { about, education, skills } from "../data";
import Section from "./Section";
import Tag from "./Tag";

const About = (): React.JSX.Element => {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-lg leading-relaxed text-muted">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <div className="flex items-start gap-3">
            <LuGraduationCap
              className="mt-0.5 size-5 shrink-0 text-accent"
              aria-hidden
            />
            <div>
              <p className="font-medium text-fg">{education.school}</p>
              <p className="text-sm text-muted">{education.degree}</p>
              <p className="mt-1 text-sm text-muted">
                {education.detail} · {education.date}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 space-y-6">
        {skills.map((group) => (
          <div key={group.label}>
            <h3 className="mb-3 text-sm font-medium tracking-wide text-muted uppercase">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default About;
