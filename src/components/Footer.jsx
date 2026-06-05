import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h3>DHULAI BUCKET</h3>
              <p>
                Professional laundry and dry cleaning service at your doorstep.
              </p>
              <div className="social-icons">
                <FaFacebookF  className="bg-lavender"/>
                <FaInstagram  className="bg-lavender"/>
                <FaTwitter  className="bg-lavender"/>
              </div>
            </div>

            <div className="col-lg-2">
              <h5>Quick Links</h5>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#booking">Booking</a>
            </div>

            <div className="col-lg-3">
              <h5>Services</h5>
              <a href="#services">Wash & Fold</a>
              <a href="#services">Dry Cleaning</a>
              <a href="#services">Ironing</a>
              <a href="#services">Express Laundry</a>
            </div>

            <div className="col-lg-3">
              <h5>Contact Info</h5>
              <p>
                <FaPhoneAlt /> +91 98765 43210
              </p>
              <p>
                <FaEnvelope /> support@dhulaibucket.com
              </p>
              <p>
                <FaMapMarkerAlt /> India
              </p>
            </div>
          </div>

          <hr />
          <p className="copyright">
            © 2026 Dhulai Bucket. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
