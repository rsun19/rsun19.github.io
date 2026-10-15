import { useEffect, useState } from "react";

// Returns the id of the section currently nearest the top of the viewport.
export default function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }
        // The previous section can still touch the band's edge after an anchor
        // jump, so prefer the furthest-down visible section.
        const last = [...ids].reverse().find((id) => visible.has(id));
        setActive(last ?? null);
      },
      // A section counts as active once it reaches the band below the nav.
      { rootMargin: "-80px 0px -55% 0px" },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
