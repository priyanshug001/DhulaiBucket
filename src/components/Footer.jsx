import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/images/DhulaiBucketLogo.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer bg-navy text-white" id="contact">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <img src={logo} alt="" className="logo" />
            </div>

            <div className="col-lg-4">
              <h5>Contact Info</h5>
              <p>
                <FaPhoneAlt /> +91 8120083908
              </p>
              <p>
                <FaEnvelope /> support@dhulaibucket.com
              </p>
              <p>
                <FaMapMarkerAlt /> Indore
              </p>
            </div>
            <div className="col-lg-4">
              <div className="social-icons d-flex gap-3 mt-3 justify-content-center">
                <Link
                  to="https://facebook.com/yourpage"
                  target="_blank"
                  className="bg-lavender text-white rounded-circle d-flex justify-content-center align-items-center text-decoration-none"
                >
                  <FaFacebookF className="fs-3"/>
                </Link>

                <Link
                  to="https://instagram.com/yourpage"
                  target="_blank"
                  className="bg-lavender text-white rounded-circle d-flex justify-content-center align-items-center text-decoration-none"
                >
                  <FaInstagram className="fs-3"/>
                </Link>

                <Link
                  to="https://twitter.com/yourpage"
                  target="_blank"
                  className="bg-lavender text-white rounded-circle d-flex justify-content-center align-items-center text-decoration-none"
                >
                  <FaTwitter className="fs-3"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright text-center m-0 pb-3">
          © 2026 Dhulai Bucket. All Rights Reserved.
        </p>

      </footer>
    </>
  );
};

export default Footer;
