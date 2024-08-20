import React from "react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Navigation Bar</NavLink>
        <div>
          <ul>
            <li>
              <NavLink to="/"> HomePage</NavLink>
            </li>
            <li>
              <NavLink to="/char1">Char1</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default navbar;
