import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg my-nav-style px-5 ${
        isScrolled ? "py-2" : "py-4"
      } fixed-top`}
    >
      <div className="container">
        <div className="nav-container d-flex justify-content-between w-100 align-items-center">
        <NavLink 
          className="navbar-brand text-white nav-link-style text-uppercase"
          to="/home"
        >
          Start Framework
        </NavLink>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <span className="fa-solid fa-bars text-white ico-bars"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link rounded-2 py-2 me-md-3 px-2 my-link-style text-uppercase text-white"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link rounded-2 py-2 me-md-3 px-2 my-link-style text-uppercase text-white"
                activeClassName="active"
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link rounded-2 py-2 px-2 my-link-style text-uppercase text-white"
                activeClassName="active"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
