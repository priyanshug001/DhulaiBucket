import React from "react";
import logoTransparent from "../assets/images/DhulaiBucketLogoTransparent.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkClass = ({ isActive }) =>
    `nav-link text-navy fw-semibold ${isActive ? "active-link" : ""
    }`;

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top bg-white bg-opacity-90 shadow-sm py-2 rounded-bottom-5"
        style={{ backdropFilter: "blur(12px)" }}
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/home">
            <img
              src={logoTransparent}
              alt="Dhulai Bucket"
              className="nav-logo"
            />
          </NavLink>

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
                <NavLink
                  to="/home"
                  end
                  className={navLinkClass}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/aboutsection"
                  className={navLinkClass}
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={navLinkClass}
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/pricing"
                  className={navLinkClass}
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/trackorder"
                  className={navLinkClass}
                >
                  Track Order
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/aiwardrobe"
                  className={navLinkClass}
                >
                  AIWardrobe
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="btn rounded-3 fw-bold px-3 py-2 book-btn text-lavender bg-white"
                  to="/booking"
                >
                  Book Now
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;