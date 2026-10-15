import { useEffect, useState } from "react";

// Sections become active once their top passes this line (nav height + buffer).
const ACTIVE_LINE = 120;

// Returns the id of the section currently under the nav, or null above the
// first section.
export default function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // Cheap enough (a few rect reads) to run on every scroll event, and
    // React skips the re-render when the value is unchanged.
    const update = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      // The last section is often too short to reach the line, so treat the
      // bottom of the page as being in it.
      if (atBottom) {
        setActive(ids[ids.length - 1] ?? null);
        return;
      }
      const passed = ids.filter((id) => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top <= ACTIVE_LINE;
      });
      setActive(passed[passed.length - 1] ?? null);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  return active;
}
