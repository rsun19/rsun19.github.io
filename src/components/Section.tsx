import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps): React.JSX.Element => {
  return (
    <section
      id={id}
      className="scroll-mt-16 border-t border-border py-10 md:py-12"
    >
      <h2 className="font-serif text-2xl font-semibold md:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
};

export default Section;
