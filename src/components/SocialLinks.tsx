import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { profile } from "../data";

const links = [
  { label: "GitHub", href: profile.github, Icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, Icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, Icon: LuMail },
];

const SocialLinks = (): React.JSX.Element => {
  return (
    <ul className="flex items-center gap-2">
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="flex size-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-fg"
          >
            <Icon className="size-5" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
