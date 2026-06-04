import React from "react";
import logo from "../assets/images/DhulaiBucketLogoTransparent.png";

const Footer = () => {
return ( 
<footer className="bg-primary-dark footer-section pt-5 pb-3"> 
    <div className="container">
    <div className="row mb-4">
      <div className="col-lg-4 mb-4">
        <div className="mb-4">
          <img
            src={logo}
            alt="Dhulai Bucket"
            height="70"
          />
        </div>
        <p className="text-white-50 pe-lg-4">
          Premium laundry and dry cleaning service for modern busy life.
        </p>
      </div>
      <div className="col-lg-2 col-md-4 mb-4">
        <h5 className="text-white mb-4">Company</h5>

        <ul className="list-unstyled">
          <li className="mb-2">
            <a href="#home" className="text-decoration-none text-primary-light">Home</a>
          </li>
          <li className="mb-2">
            <a href="#about" className="text-decoration-none text-primary-light">About</a>
          </li>
          <li className="mb-2">
            <a href="#service" className="text-decoration-none text-primary-light"> Service</a>
          </li>
          <li className="mb-2">
            <a href="#contact" className="text-decoration-none text-primary-light">Contact</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-4 mb-4">
        <h5 className="text-white mb-4">Further Links</h5>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a href="#terms" className="text-decoration-none text-primary-light">Terms</a>
          </li>
          <li className="mb-2">
            <a href="#news" className="text-decoration-none text-primary-light">News</a>
          </li>
          <li className="mb-2">
            <a href="#recruitment" className="text-decoration-none text-primary-light">Recruitment</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-4">
        <h5 className="text-white mb-4">Get In Touch</h5>

        <p className="mb-2 text-white-50">
          <i className="fas fa-location-dot text-primary-light me-2"></i>
          India
        </p>
        <p className="mb-2 text-white-50">
          <i className="fas fa-phone text-primary-light me-2"></i>
          +91 98765 43210
        </p>
        <p className="mb-2 text-white-50">
          <i className="fas fa-envelope text-primary-light me-2"></i>
          support@dhulaibucket.com
        </p>
      </div>
    </div>
    <hr className="border-secondary" />
    <div className="text-center mt-3 text-white-50 small">
      Copyright © 2026 Dhulai Bucket | All Rights Reserved
    </div>
  </div>
</footer>
);
};

export default Footer;
