import React from "react";
import { profile } from "../data";
import Section from "./Section";
import TextLinks from "./TextLinks";

const Contact = (): React.JSX.Element => {
  return (
    <Section id="contact" title="Contact">
      <p className="text-lg">
        Email me at{" "}
        <a href={`mailto:${profile.email}`} className="text-link">
          {profile.email}
        </a>
        .
      </p>
      <div className="mt-4">
        <TextLinks include={["GitHub", "LinkedIn"]} />
      </div>
    </Section>
  );
};

export default Contact;
