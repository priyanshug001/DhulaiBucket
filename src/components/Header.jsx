import React from "react";
import logoTransparent from "../assets/images/DhulaiBucketLogoTransparent.png";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark py-3 shadow"
      style={{ backgroundColor: "#0B0A2A" }}
    >
      <div className="container">

        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src={logoTransparent}
            alt="Dhulai Bucket"
            className="navbar-logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#basic-navbar-nav"
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="basic-navbar-nav"
        >
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <a
                className="nav-link fw-semibold px-3"
                style={{ color: "#B89AC3" }}
                href="#home"
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold px-3"
                style={{ color: "#B89AC3" }}
                href="#about"
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold px-3"
                style={{ color: "#B89AC3" }}
                href="#services"
              >
                Services
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold px-3"
                style={{ color: "#B89AC3" }}
                href="#contact"
              >
                Contact
              </a>
            </li>

          </ul>


          <button
            className="btn rounded-pill px-4 fw-bold text-white"
            style={{ backgroundColor: "#B89AC3" }}
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;