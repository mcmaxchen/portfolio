import React, { useState } from "react";
import ScrollButton from "../scrollButton";
import List from "../../imgs/list.svg";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="border rounded-3xl lg:py-4">
      <ul className="flex justify-center lg:hidden">
        <li>
          <button onClick={() => setDropdown(!dropdown)}>
            <img src={List} alt="button" className="w-16" />
          </button>

          {dropdown ? (
            <div className="bg-main absolute border rounded-xl flex flex-col p-4 gap-2">
              <ScrollButton name="about" />
              <ScrollButton name="technos" />
              <ScrollButton name="projects" />
              <ScrollButton name="contact" />
            </div>
          ) : (
            <></>
          )}
        </li>
      </ul>
      <ul className="hidden lg:flex justify-around lg:justify-center gap-4 md:gap-10">
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
