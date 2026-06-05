import React from "react";
import {
  FaTruck,
  FaClock,
  FaShieldAlt,
  FaTshirt,
  FaLeaf,
  FaStar,
  FaTags,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../App.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container">
          <a className="navbar-brand brand-logo" href="#home">
            <div className="logo-icon">DB</div>
            <span>DHULAI BUCKET</span>
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

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="dot-pattern"></div>

        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 hero-left">
              <h1>
                WE DO <br />
                LAUNDRY <br />
                FOR YOU
              </h1>
              <p>
                Professional Laundry & Dry Cleaning Service at Your Doorstep.
              </p>

              <div className="hero-buttons">
                <a href="#booking" className="btn primary-btn">
                  Book Pickup
                </a>
                <a href="#services" className="btn secondary-btn">
                  Learn More
                </a>
              </div>
            </div>

            <div className="col-lg-6 hero-right">
              <div className="hero-image-box">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>

                <img
                  src="/images/.png"
                  alt="Laundry Service"
                  className="hero-img"
                />

                <div className="floating-card card-one">
                  <div className="card-icon">
                    <FaTruck />
                  </div>
                  <div>
                    <h5>Free Pickup & Delivery</h5>
                    <p>Doorstep service</p>
                  </div>
                </div>

                <div className="floating-card card-two">
                  <div className="card-icon">
                    <FaClock />
                  </div>
                  <div>
                    <h5>Open 24 Hours</h5>
                    <p>Anytime support</p>
                  </div>
                </div>

                <div className="floating-card card-three">
                  <div className="card-icon">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <h5>Fabric Safe Cleaning</h5>
                    <p>Premium care</p>
                  </div>
                </div>

                <div className="floating-card card-four">
                  <div className="card-icon">
                    <FaStar />
                  </div>
                  <div>
                    <h5>Premium Washing</h5>
                    <p>Fresh finish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding" id="about">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us?</h2>
            <p>Fresh clothes, quick pickup, and professional fabric care.</p>
          </div>

          <div className="row g-4">
            {[
              [<FaTruck />, "Fast Delivery"],
              [<FaLeaf />, "Eco Friendly"],
              [<FaShieldAlt />, "Premium Care"],
              [<FaTags />, "Affordable Pricing"],
            ].map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="feature-card">
                  <div className="feature-icon">{item[0]}</div>
                  <h4>{item[1]}</h4>
                  <p>Reliable laundry service designed for your daily needs.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding services-section" id="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Complete laundry solutions for your clothes and home fabrics.</p>
          </div>

          <div className="row g-4">
            {[
              "Wash & Fold",
              "Dry Cleaning",
              "Ironing",
              "Express Laundry",
              "Shoe Cleaning",
              "Curtain Cleaning",
            ].map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="service-card">
                  <FaTshirt />
                  <h4>{service}</h4>
                  <p>Quality cleaning with safe washing and timely delivery.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="row g-4 text-center">
            {[
              ["10000+", "Clothes Cleaned"],
              ["5000+", "Happy Customers"],
              ["24/7", "Support"],
              ["99%", "Satisfaction"],
            ].map((stat, index) => (
              <div className="col-6 col-lg-3" key={index}>
                <div className="stat-box">
                  <h2>{stat[0]}</h2>
                  <p>{stat[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Happy Customers</h2>
            <p>What our customers say about Dhulai Bucket.</p>
          </div>

          <div className="row g-4">
            {["Priya Sharma", "Amit Verma", "Riya Gupta"].map((name, index) => (
              <div className="col-md-4" key={index}>
                <div className="testimonial-card">
                  <p>
                    “Amazing laundry service. Clothes were fresh, clean and
                    delivered on time.”
                  </p>
                  <h5>{name}</h5>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="booking">
        <div className="container text-center">
          <h2>Ready for Fresh Clothes?</h2>
          <p>Schedule your laundry pickup today with Dhulai Bucket.</p>
          <a href="#contact" className="btn cta-btn">
            Schedule Pickup
          </a>
        </div>
      </section>

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
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
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
    </div>
  );
};

export default Home;
