import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar">
      <div class="leftNavContents">
        <NavLink to="/" rel="noopener noreferrer">
          <h1>ROHIT</h1>
        </NavLink>
      </div>

      <div class="container rightNavContents">
        <NavLink to="/" rel="noopener noreferrer" class="active">
          Home
        </NavLink>
        <NavLink to="/projects" rel="noopener noreferrer">
          Projects
        </NavLink>
        <NavLink to="/skills" rel="noopener noreferrer">
          Skills
        </NavLink>
        <NavLink to="/about" rel="noopener noreferrer">
          About
        </NavLink>
        <NavLink to="/contact" rel="noopener noreferrer">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
