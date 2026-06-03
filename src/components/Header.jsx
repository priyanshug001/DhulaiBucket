import React from "react";
import logoTransparent from "../assets/images/DhulaiBucketLogoTransparent.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3 bg-transparent">
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

        <div className="collapse navbar-collapse" id="basic-navbar-nav">
          <ul className="navbar-nav mx-auto fw-medium">
            <li className="nav-item">
              <a className="nav-link text-primary-dark px-3" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-primary-dark px-3" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-primary-dark px-3" href="#pages">
                Pages
              </a>
            </li>
          </ul>

          <a href="#contact" className="btn btn-outline-theme">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;