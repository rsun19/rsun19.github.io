import React, { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { profile } from "./data";

const App: React.FC = () => {
  // The browser tries to jump to the URL's #section before React has rendered
  // it, so redo that jump once the page exists.
  useEffect(() => {
    const target = window.location.hash
      ? document.getElementById(window.location.hash.slice(1))
      : null;
    target?.scrollIntoView({ behavior: "instant" });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main className="mx-auto max-w-5xl overflow-x-clip px-4 sm:px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>Built with React, Tailwind CSS & Framer Motion.</p>
        </div>
      </footer>
    </MotionConfig>
  );
};

export default App;
