import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  const [offset, setOffset] = useState(0);
  const parallaxNav =
    offset < 100
      ? "navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      : "navbar navbar-b navbar-reduce navbar-expand-md fixed-top";
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <nav className={parallaxNav}>
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <a className="navbar-brand js-scroll" href="/">
            <img src="logo.png" alt="" />{" "}
            <span style={{ fontWeight: "700" }}>Mahadi Hasan</span>
          </a>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <HashLink aria-current="page" className="nav-link" to="/#home">
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#about">
                About
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink className="nav-link" to="/#projects">
                Projects
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#contact">
                Contact
              </HashLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blogs">
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
