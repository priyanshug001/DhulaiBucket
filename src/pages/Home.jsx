import React from "react";
import Header from "../components/Header";
import logom from "../assets/images/image (2).png";
import about from "../assets/images/aboutImage.png"
import Footer from "../components/Footer";

const Home = () => {
  const services = [
    { title: "Laundry Pickup", icon: "fa-truck" },
    { title: "Wash And Fold", icon: "fa-shirt" },
    { title: "Bulk Discount", icon: "fa-tags" },
    { title: "Dry Cleaning", icon: "fa-soap" },
  ];

  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="container">
        <section className="hero-section my-4 pt-4" id="home">
          <div className="row align-items-center">

            <div className="col-12 col-lg-6 text-center text-lg-start mb-5 mb-lg-0">

              <span className="badge hero-badge text-dark px-4 py-3 rounded-pill">
                Premium Laundry Service
              </span>

              <h1 className="hero-title mt-3">
                DHULAI
                <br />
                BUCKET
              </h1>

              <p className="fs-4 text-primary-light fw-semibold">
                Wear Freshness Daily.
              </p>

              <p className="lead mt-4 mb-4 text-muted">
                Experience premium care for your clothes with doorstep pickup,
                washing, folding and quick delivery service.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <button className="btn btn-theme">
                  Get Started
                </button>

                <button className="btn btn-outline-theme">
                  Learn More
                </button>
              </div>

            </div>

            <div className="col-12 col-lg-6 position-relative text-center">

              <img
                src={logom}
                alt="Dhulai Bucket"
                className="hero-logo img-fluid rounded-circle"
              />

              <div
                className="card floating-card position-absolute shadow-sm border-0 rounded-pill px-3 py-2 d-none d-lg-block top-0 end-0"
              >
                <div className="d-flex align-items-center">

                  <i className="fas fa-truck text-premium-light me-2"></i>

                  <div className="text-start">
                    <strong className="text-primary-dark d-block">
                      Free Delivery
                    </strong>

                    <small className="text-muted">
                      Doorstep Service
                    </small>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Services */}
        <section className="py-5 text-center" id="service">
          <h2 className="display-5 fw-bold text-primary-light mb-5">
            Our Services
          </h2>

          <div className="row">

            {services.map((service, idx) => (
              <div
                className="col-12 col-sm-6 col-lg-3 mb-4"
                key={idx}
              >
                <div className="card service-card h-100 p-4 shadow-sm border-0">

                  <div className="card-body text-center">

                    <div className="service-icon rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">

                      <i
                        className={`fas ${service.icon}`}
                        style={{
                          fontSize: "2.5rem",
                          color: "#0B0A2A",
                        }}
                      ></i>

                    </div>

                    <h5 className="card-title fw-bold text-primary-dark">
                      {service.title}
                    </h5>

                    <p className="card-text text-muted">
                      Clean, hygienic and affordable laundry care for daily wear
                      and special outfits.
                    </p>

                    <a
                      href="#learn"
                      className="text-primary-light text-decoration-none fw-bold"
                    >
                      <i className="fas fa-arrow-right me-1"></i>
                      Learn More
                    </a>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </section>

        {/* About */}
        <section className="py-5" id="about">
          <div className="row align-items-center">

            <div className="col-12 col-lg-5 text-center mb-4 mb-lg-0">

              <div className="worker-card">

                <img
                  src={about}
                  alt="Dhulai Bucket"
                  className="img-fluid"
                />
              </div>

            </div>

            <div className="col-12 col-lg-7 text-center text-lg-start">

              <h2 className="display-4 fw-bold text-primary-light mb-4">
                Getting Tired
                <br />
                With Your Laundry?
              </h2>

              <p className="text-muted mb-4">
                We make laundry simple with doorstep pickup,
                safe washing process and clean packaging.
              </p>

              <p className="text-muted mb-4">
                Perfect for students, working professionals,
                families and busy lifestyle users.
              </p>

              <button className="btn btn-theme">
                Call Us Now
              </button>

            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="py-5 mb-5">
          <div className="row align-items-center">

            <div className="col-12 col-lg-6 mb-4 mb-lg-0">

              <h2 className="display-5 fw-bold text-primary-light mb-4">
                Frequently Asked Question
              </h2>

              <div className="accordion" id="faqAccordion">

                <div className="accordion-item">

                  <h2 className="accordion-header">

                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                    >
                      How does laundry pickup work?
                    </button>

                  </h2>

                  <div
                    id="faq1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      You book a pickup, our team collects clothes,
                      cleans them and delivers them back.
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div className="col-12 col-lg-6 text-center">

              <i className="bi bi-question-circle faq-icon"></i>

            </div>

          </div>

        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;