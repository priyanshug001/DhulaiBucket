import React from "react";
import logoTransparent from "../assets/images/DhulaiBucketLogoTransparent.png";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top bg-white bg-opacity-90 shadow-sm py-2"
        style={{ backdropFilter: "blur(12px)" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img
              src={logoTransparent}
              alt="Dhulai Bucket"
              className="nav-logo"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
              <li className="nav-item">
                <a className="nav-link fw-semibold active" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#services">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#pricing">
                  Pricing
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#contact">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="btn rounded-3 fw-bold px-3 py-2 book-btn text-lavender bg-white"
                  href="#booking"
                > 
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