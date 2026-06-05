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
        <section className="hero-section min-vh-100 pt-5" id="home">
          <div className="dot-pattern"></div>
          <div className="container">
            <div className="row align-items-center min-vh-100 pt-5">
              <div className="col-lg-6 hero-left ">
                <h1 className="fw-bolder mb-4 text-lavender">
                  DHULAI <br /> 
                  BUCKET
                </h1>
                <p>
                  Professional Laundry & Dry Cleaning Service at Your Doorstep.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <a href="#booking" className="btn primary-btn px-4 py-3 rounded-3 fw-bold bg-lavender">
                    Book Pickup
                  </a>
                  <a href="#services" className="btn secondary-btn px-4 py-3 rounded-3 fw-bold bg-white">
                    Learn More
                  </a>
                </div>
              </div>

              <div className="col-lg-6 position-relative">
                <div className="d-flex align-items-center justify-content-center position-relative">
                  <div className="blob blob-1 rounded-circle position-absolute bg-lavender"></div>
                  <div className="blob blob-2 rounded-circle position-absolute bg-lavender"></div>

                  <img
                    src={logom}
                    alt="Laundry Professional"
                    className="hero-img position-relative rounded-3"
                  />

                  <div className="floating-card card-one position-absolute bg-white rounded-pill shadow d-flex align-items-center gap-3 py-2 px-3">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <FaTruck />
                    </div>
                    <div>
                      <h5 className="m-0 fw-bold fs-6">Free Pickup & Delivery</h5>
                      <p className="m-0">Doorstep service</p>
                    </div>
                  </div>

                  <div className="floating-card card-two position-absolute bg-white rounded-pill shadow d-flex align-items-center gap-3 py-2 px-3">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <FaClock />
                    </div>
                    <div>
                      <h5 className="m-0 fw-bold fs-6">Open 24 Hours</h5>
                      <p className="m-0">Anytime support</p>
                    </div>
                  </div>

                  <div className="floating-card card-three position-absolute bg-white rounded-pill shadow d-flex align-items-center gap-3 py-2 px-3">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <FaShieldAlt />
                    </div>
                    <div>
                      <h5 className="m-0 fw-bold fs-6">Fabric Safe Cleaning</h5>
                      <p className="m-0">Premium care</p>
                    </div>
                  </div>

                  <div className="floating-card card-four position-absolute bg-white rounded-pill shadow d-flex align-items-center gap-3 py-2 px-3">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <FaStar />
                    </div>
                    <div>
                      <h5 className="m-0 fw-bold fs-6">Premium Washing</h5>
                      <p className="m-0">Fresh finish</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-4" id="about">
          <div className="container">
            <div className="section-title text-center mb-5">
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
                  <div className="feature-card h-100 text-center rounded-3">
                    <div className="feature-icon bg-lavender text-white rounded-circle p-3 mb-4">{item[0]}</div>
                    <h4>{item[1]}</h4>
                    <p>Reliable laundry service designed for your daily needs.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-4 services-section" id="services">
          <div className="container">
            <div className="section-title text-center">
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
                  <div className="service-card h-100 text-center rounded-3">
                    <FaTshirt  className="bg-lavender text-white rounded-circle p-3 mb-4"/>
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
                    <h2 className="text-lavender fw-bolder">{stat[0]}</h2>
                    <p className="m-0 fw-semibold">{stat[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-4">
          <div className="container">
            <div className="section-title text-center">
              <h2>Happy Customers</h2>
              <p>What our customers say about Dhulai Bucket.</p>
            </div>

            <div className="row g-4">
              {["Priya Sharma", "Amit Verma", "Riya Gupta"].map((name, index) => (
                <div className="col-md-4" key={index}>
                  <div className="testimonial-card h-100 text-center rounded-3">
                    <p>
                      “Amazing laundry service. Clothes were fresh, clean and
                      delivered on time.”
                    </p>
                    <h5>{name}</h5>
                    <div className="stars text-lavender">★★★★★</div>
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