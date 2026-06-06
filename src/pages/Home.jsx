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
import logom from "../assets/images/home.png"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-page text-navy">

        <Header />
        {/* Hero Section */}
        <div className="container-fluid hero-section p-0">
          <div className="container">
            <section className="min-vh-100 pt-5" id="home">
              <div className="dot-pattern"></div>
              <div className="row align-items-center min-vh-100 pt-5">
                <div className="col-lg-6 hero-left ">
                  <h1 className="fw-bolder mb-4 text-lavender">
                    DHULAI <br />
                    BUCKET
                  </h1>
                  <p className="fs-5 text-navy">
                    Professional Laundry & Dry Cleaning Service at Your Doorstep.
                  </p>

                  <div className="d-flex flex-wrap gap-3">
                    <Link to="#booking" className="btn primary-btn px-3 py-2 rounded-3 fw-bold bg-lavender text-white">
                      Book Pickup
                    </Link>
                    <Link to="#services" className="btn secondary-btn px-3 py-2 rounded-3 fw-bold bg-white text-navy">
                      Learn More
                    </Link>
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
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center fs-6 text-white bg-lavender">
                        <FaTruck />
                      </div>
                      <div>
                        <h5 className="m-0 fw-bold fs-6 text-navy">Free Pickup & Delivery</h5>
                        <p className="m-0">Doorstep service</p>
                      </div>
                    </div>

                    <div className="floating-card card-two position-absolute bg-white rounded-pill shadow d-flex align-items-center gap-3 py-2 px-3">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center fs-6 text-white bg-lavender">
                        <FaClock />
                      </div>
                      <div>
                        <h5 className="m-0 fw-bold fs-6 text-navy">Open 24 Hours</h5>
                        <p className="m-0">Anytime support</p>
                      </div>
                    </div>

                    <div className="floating-card card-three position-absolute bg-white rounded-pill shadow d-flex align-items-center gap-3 py-2 px-3">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center fs-6 text-white bg-lavender">
                        <FaShieldAlt />
                      </div>
                      <div>
                        <h5 className="m-0 fw-bold fs-6 text-navy">Fabric Safe Cleaning</h5>
                        <p className="m-0">Premium care</p>
                      </div>
                    </div>

                    <div className="floating-card card-four position-absolute bg-white rounded-pill shadow d-flex align-items-center gap-3 py-2 px-3">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center fs-6 text-white bg-lavender">
                        <FaStar />
                      </div>
                      <div>
                        <h5 className="m-0 fw-bold fs-6 text-navy">Premium Washing</h5>
                        <p className="m-0">Fresh finish</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="py-4" id="about">
              <div className="section-title text-center mb-5">
                <h2 className="text-navy fs-1 fw-bolder">Why Choose Us?</h2>
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
                    <div className="feature-card bg-white h-100 text-center rounded-3">
                      <span className="feature-icon bg-lavender text-white rounded-circle p-3 fs-4 text-center">{item[0]}</span>
                      <h4 className="fw-bold text-navy mt-4">{item[1]}</h4>
                      <p>Reliable laundry service designed for your daily needs.</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Services */}
            <section className="py-4 services-section" id="services">
              <div className="section-title text-center">
                <h2 className="text-navy fs-1 fw-bolder">Our Services</h2>
                <p>Complete laundry solutions for your clothes and home fabrics.</p>
              </div>

              <div className="row g-4">
                {[
                  "Wash & Fold",
                  "Dry Cleaning",
                  "Ironing",
                  "Express Laundry",
                ].map((service, index) => (
                  <div className="col-md-6 col-lg-3" key={index}>
                    <div className="service-card bg-white h-100 text-center rounded-3">
                      <FaTshirt className="bg-lavender text-white rounded-circle p-3 mb-4" />
                      <h4 className="fw-bold text-navy">{service}</h4>
                      <p>Quality cleaning with safe washing and timely delivery.</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <section
            id="app"
            className="download-app-section bg-light overflow-hidden py-5"
          >
            <div className="container">
              <div className="row align-items-center">

                {/* Left Side */}
                <div
                  className="col-lg-6 position-relative d-flex justify-content-center align-items-end mb-5 mb-lg-0"
                  style={{ minHeight: "520px" }}
                >

                  <img
                    src="/images/app-worker.png"
                    alt="Dhulai Bucket App"
                    className="img-fluid position-relative z-3"
                    style={{
                      maxWidth: "560px",
                      width: "88%"
                    }}
                  />
                </div>

                {/* Right Side */}
                <div className="col-lg-6 text-center text-lg-start">

                  <span className="badge rounded-pill px-4 py-3 fs-6 fw-bold text-navy bg-white shadow-sm mb-4">
                    10,000+ Downloads
                  </span>

                  <h2
                    className="fw-bold lh-1 mb-4 fw-bold text-navy"
                    style={{
                      fontSize: "clamp(52px,5vw,86px)",
                    }}
                  >
                    Download <br />
                    Our App
                  </h2>

                  <p className="fs-5 text-secondary lh-lg mb-4">
                    Book laundry pickups, track your orders in real-time,
                    manage payments, and enjoy doorstep laundry services
                    directly from your smartphone.
                  </p>

                  {/* Features */}

                  <div className="row g-3 mb-4">

                    <div className="col-md-6">
                      <span className="fw-semibold text-navy">
                        ✓ One-Tap Pickup Booking
                      </span>
                    </div>

                    <div className="col-md-6">
                      <span className="fw-semibold text-navy">
                        ✓ Real-Time Order Tracking
                      </span>
                    </div>

                    <div className="col-md-6">
                      <span className="fw-semibold text-navy">
                        ✓ Secure Online Payments
                      </span>
                    </div>

                    <div className="col-md-6">
                      <span className="fw-semibold text-navy">
                        ✓ Exclusive App Discounts
                      </span>
                    </div>

                  </div>

                  {/* Buttons */}

                  <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">

                    <a
                      href="#playstore"
                      className="btn btn-light rounded-pill px-4 py-3 shadow-sm d-flex align-items-center gap-3"
                    >
                      <span className="fs-3">▶</span>

                      <div className="text-start">
                        <small className="d-block text-navy">
                          GET IT ON
                        </small>

                        <strong className="text-navy">
                          Google Play
                        </strong>
                      </div>
                    </a>

                    <a
                      href="#appstore"
                      className="btn btn-light rounded-pill px-4 py-3 shadow-sm d-flex align-items-center gap-3"
                    >
                      <span className="fs-3"></span>

                      <div className="text-start">
                        <small className="d-block text-navy">
                          Download on the
                        </small>

                        <strong className="text-navy">
                          App Store
                        </strong>
                      </div>
                    </a>

                  </div>

                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;