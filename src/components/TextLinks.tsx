import React from "react";
import { profile } from "../data";
import ExternalLink from "./ExternalLink";

const links = [
  { label: "Résumé (PDF)", href: profile.resume, external: true },
  { label: "GitHub", href: profile.github, external: true },
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "Email", href: `mailto:${profile.email}`, external: false },
];

const TextLinks = ({
  include = links.map((l) => l.label),
}: {
  include?: string[];
}): React.JSX.Element => {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {links
        .filter((l) => include.includes(l.label))
        .map(({ label, href, external }) => (
          <li key={label}>
            {external ? (
              <ExternalLink href={href} className="text-link">
                {label}
              </ExternalLink>
            ) : (
              <a href={href} className="text-link">
                {label}
              </a>
            )}
          </li>
        ))}
    </ul>
  );
};

export default TextLinks;
