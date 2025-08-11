import React from "react";
import resume from "../assets/ROBERT_SUN_RESUME.pdf";

const ContactBar: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
      }}
    >
      <a
        target="_blank"
        href="https://www.linkedin.com/in/rob-sun/"
        style={{ marginRight: "10px", color: "white" }}
        rel="noreferrer"
      >
        <i className="fa fa-linkedin fa-2x" aria-hidden="true" />
      </a>

      <a
        target="_blank"
        href="mailto:robertssun1234@gmail.com"
        style={{ marginRight: "10px", color: "white" }}
        rel="noreferrer"
      >
        <i className="fa fa-envelope fa-2x" aria-hidden="true" />
      </a>
      <a
        target="_blank"
        href={resume}
        style={{ marginRight: "10px", color: "white" }}
        rel="noreferrer"
      >
        <i className="fa fa-file fa-2x" aria-hidden="true" />
      </a>
      <a
        target="_blank"
        href="https://github.com/rsun19"
        style={{ color: "white" }}
        rel="noreferrer"
      >
        <i className="fa fa-github fa-2x" aria-hidden="true" />
      </a>
    </div>
  );
};

export default ContactBar;
