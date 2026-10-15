import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps): React.JSX.Element => {
  return (
    <section id={id} className="scroll-mt-20 py-14 md:py-20">
      <h2 className="font-serif text-2xl font-semibold md:text-3xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
};

export default Section;
