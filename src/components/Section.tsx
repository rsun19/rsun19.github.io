import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps): React.JSX.Element => {
  return (
    <section id={id} className="scroll-mt-20 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="flex items-center gap-4 text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
          <span className="h-px flex-1 bg-border" aria-hidden />
        </h2>
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
};

export default Section;
