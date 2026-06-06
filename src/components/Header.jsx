import React from "react";
import logoTransparent from "../assets/images/DhulaiBucketLogoTransparent.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top bg-white bg-opacity-90 shadow-sm py-2"
        style={{ backdropFilter: "blur(12px)" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/home">
            <img
              src={logoTransparent}
              alt="Dhulai Bucket"
              className="nav-logo"
            />
          </Link>

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
                <Link className="nav-link text-navy fw-semibold active" to="/home">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-navy fw-semibold" to="/aboutsection">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-navy fw-semibold" to="/services">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-navy fw-semibold" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-navy fw-semibold" to="/contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="btn rounded-3 fw-bold px-3 py-2 book-btn text-lavender bg-white"
                  to="/booking"
                > 
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;