import React from "react";

type ExternalLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "target" | "rel"
> & {
  href: string;
  children: React.ReactNode;
};

// Every link that opens a new tab goes through here, so they all show the
// same arrow and announce the new tab to screen readers.
const ExternalLink = ({
  children,
  ...props
}: ExternalLinkProps): React.JSX.Element => {
  return (
    <a {...props} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true">{" ↗"}</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
};

export default ExternalLink;
