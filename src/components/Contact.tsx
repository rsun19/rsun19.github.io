import React from "react";
import { LuMail } from "react-icons/lu";
import { profile } from "../data";
import Section from "./Section";
import SocialLinks from "./SocialLinks";

const Contact = (): React.JSX.Element => {
  return (
    <Section id="contact" title="Get in touch">
      <div className="flex flex-col items-start gap-6">
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          I&apos;m always happy to talk about frontend engineering, developer
          tooling, or new opportunities. The fastest way to reach me is email.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-medium text-bg transition hover:brightness-110"
          >
            <LuMail className="size-4" aria-hidden />
            Say hello
          </a>
          <SocialLinks />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
