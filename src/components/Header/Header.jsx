import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const smallScreen = useMediaQuery("(max-width:768px)");
  const bigScreen = useMediaQuery("(max-width:2024px)");

  useEffect(() => {
    if (smallScreen) {
      setShowNav(false);
    } else if (bigScreen) {
      setShowNav(true);
    }
  }, [smallScreen, bigScreen]);

  return (
    <div className="navbar-collapse">
      <nav className="navbar">
        <div className="leftNavContents">
          <NavLink to="/">
            <h1>ROHIT</h1>
          </NavLink>
          <button
            type="button"
            class="navbar-toggler"
            id="navbar-toggler"
            onClick={() => {
              setMobile(!mobile);
              setShowNav(!showNav);
            }}
          >
            {mobile ? (
              <span>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            ) : (
              <span>
                <FontAwesomeIcon icon={faBars} />
              </span>
            )}
          </button>
        </div>

        {showNav ? (
          <div className="container rightNavContents">
            {mobile ? (
              <NavLink reloadDocument={true} to="/" class="active">
                Home
              </NavLink>
            ) : (
              <NavLink reloadDocument={false} to="/" class="active">
                Home
              </NavLink>
            )}
            {mobile ? (
              <NavLink reloadDocument={true} to="/projects">
                Projects
              </NavLink>
            ) : (
              <NavLink reloadDocument={false} to="/projects">
                Projects
              </NavLink>
            )}
            {mobile ? (
              <NavLink reloadDocument={true} to="/skills">
                Skills
              </NavLink>
            ) : (
              <NavLink reloadDocument={false} to="/skills">
                Skills
              </NavLink>
            )}
            {mobile ? (
              <NavLink reloadDocument={true} to="/about">
                About
              </NavLink>
            ) : (
              <NavLink reloadDocument={false} to="/about">
                About
              </NavLink>
            )}
            {mobile ? (
              <NavLink reloadDocument={true} to="/contact">
                Contact
              </NavLink>
            ) : (
              <NavLink reloadDocument={false} to="/contact">
                Contact
              </NavLink>
            )}
          </div>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default Header;
