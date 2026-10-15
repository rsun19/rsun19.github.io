import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";
import useActiveSection from "../hooks/useActiveSection";
import { profile } from "../data";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
const sectionIds = sections.map((s) => s.id);

const Nav = (): React.JSX.Element => {
  const active = useActiveSection(sectionIds);
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors ${
        scrolled || open
          ? "border-border bg-bg/80"
          : "border-transparent bg-transparent"
      }`}
    >
      <motion.div
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent"
        style={{ scaleX: scrollYProgress }}
        aria-hidden
      />
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#top"
          className="font-mono text-lg font-semibold tracking-tight text-fg"
          aria-label="Back to top"
        >
          RS<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map(({ id, label }) => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`block px-3 py-2 text-sm transition-colors ${
                  active === id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {label}
              </a>
              {active === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-px h-px bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </li>
          ))}
          <li className="ml-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-accent/40 px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
            >
              Résumé
            </a>
          </li>
          <li className="ml-1">
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-lg text-fg"
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
          className="flex flex-col gap-1 border-t border-border px-4 py-4 md:hidden"
        >
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 ${
                  active === id ? "bg-surface text-fg" : "text-muted"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="block rounded-lg px-3 py-2.5 font-medium text-accent"
            >
              Résumé
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Nav;
