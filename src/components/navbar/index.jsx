import React from "react";
import ScrollButton from "../scrollButton";

function Navbar() {
  return (
    <nav className="sticky top-0 py-3 bg-main border-b md:py-6">
      <ul className="flex justify-evenly lg:justify-end gap-4 lg:gap-10">
        <li>
          <ScrollButton name="about" />
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
