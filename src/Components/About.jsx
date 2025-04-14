import React from "react";
import 'hamburgers/dist/hamburgers.min.css';

export default function About() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div class="cloud-thought">
        <p>Hmmm... what if I made this in CSS? 🤔</p>
    </div>
  );
}
