import React, { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import useActiveSection from "../hooks/useActiveSection";
import { profile } from "../data";
import ThemeToggle from "./ThemeToggle";
import ExternalLink from "./ExternalLink";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
const sectionIds = sections.map((s) => s.id);

const Nav = (): React.JSX.Element => {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6"
      >
        <a href="#top" className="font-serif text-lg font-semibold">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`text-sm underline-offset-[6px] transition-colors ${
                  active === id
                    ? "text-fg underline decoration-1"
                    : "text-muted hover:text-fg"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <ExternalLink href={profile.resume} className="text-link text-sm">
              Résumé
            </ExternalLink>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex size-10 items-center justify-center text-fg"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <LuX className="size-6" /> : <LuMenu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="flex flex-col border-t border-border px-4 py-3 md:hidden"
        >
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block py-2.5 ${
                  active === id
                    ? "text-fg underline underline-offset-4"
                    : "text-muted"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <ExternalLink
              href={profile.resume}
              className="block py-2.5 text-muted"
            >
              Résumé
            </ExternalLink>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Nav;
