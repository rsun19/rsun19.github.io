import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { profile } from "./data";
import { ThemeProvider } from "./theme/ThemeProvider";

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
    <ThemeProvider>
      <Nav />
      <main className="mx-auto max-w-5xl overflow-x-clip px-4 sm:px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-muted sm:px-6">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </footer>
    </ThemeProvider>
  );
};

export default App;
