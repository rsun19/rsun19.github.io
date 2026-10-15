import React from "react";

const Tag = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  return (
    <li className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
      {children}
    </li>
  );
};

export default Tag;
