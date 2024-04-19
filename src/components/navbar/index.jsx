import React from "react";
import ScrollButton from "../scrollButton";

function Navbar() {
  return (
    <nav className="rounded-3xl lg:py-4">
      <ul className="hidden md:flex border py-4 rounded-xl justify-center gap-10">
        <li>
          <ScrollButton name="about" />
        </li>

        <li>
          <ScrollButton name="technos" />
        </li>

        <li>
          <ScrollButton name="projects" />
        </li>

        <li>
          <ScrollButton name="contact" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
