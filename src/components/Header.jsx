import React from "react";
import logoTransparent from "../assets/images/DhulaiBucketLogoTransparent.png";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <div className="logo-icon">
              <img src={logoTransparent} alt="Dhulai Bucket" className="nav-logo" />
            </div>
          </a>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="btn book-btn" href="#booking">
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;