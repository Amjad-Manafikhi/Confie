import React from "react";
import 'hamburgers/dist/hamburgers.min.css';

export default function About() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <button
      className={`hamburger hamburger--collapse ${isOpen ? "is-active" : ""}`}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner">
        </span>
      </span>
    </button>
  );
}
