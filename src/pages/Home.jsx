import React from "react";
import {
  FaTruck,
  FaClock,
  FaShieldAlt,
  FaTshirt,
  FaLeaf,
  FaStar,
  FaTags,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logom from "../assets/images/image (2).png"

const Home = () => {
  return (
    <>
      <div className="home-page">

        <Header />
        {/* Hero Section */}
        <section className="hero-section" id="home">
          <div className="dot-pattern"></div>
          <div className="container">
            <div className="row align-items-center min-vh-100">
              <div className="col-lg-6 hero-left">
                <h1>
                  DHULAI <br />
                  BUCKET
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
                    src={logom}
                    alt="Laundry Professional"
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
      </div>
      <Footer />
    </>
  );
};

export default Home;