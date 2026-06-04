import React from "react";
import Header from "../components/Header";
import logom from "../assets/images/DhulaiBucketLogo.png";

const Home = () => {
  const services = [
    { title: "Laundry Pickup", icon: "bi-truck" },
    { title: "Wash And Fold", icon: "bi-basket2-fill" },
    { title: "Bulk Discount", icon: "bi-tags-fill" },
    { title: "Dry Cleaning", icon: "bi-shield-check" },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero-section py-5" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <span className="badge hero-badge text-dark px-4 py-3 rounded-5 fs-6">
                Premium Laundry Service
              </span>

              <h1 className="hero-title mt-3">
                DHULAI <br />
                BUCKET
              </h1>

              <p className="fs-4 text-primary-light fw-semibold">
                Wear Freshness Daily.
              </p>

              <p className="lead mt-4 mb-4 text-muted">
                Experience premium care for your clothes with doorstep pickup,
                washing, folding and quick delivery service.
              </p>

              <div>
                <button className="btn btn-theme me-3 mb-2">Get Started</button>

                <button className="btn btn-outline-theme mb-2">
                  Learn More
                </button>
              </div>
            </div>

            <div className="col-lg-6 position-relative text-center">
              <img
                src={logom}
                alt="Dhulai Bucket"
                className="hero-logo img-fluid"
              />

              <div className="card floating-card position-absolute top-0 end-0 shadow-sm border-0 rounded-pill px-3 py-2 d-none d-md-block">
                <div className="d-flex align-items-center">
                  <i className="bi bi-truck fs-4 text-primary-light me-2"></i>

                  <div className="text-start">
                    <strong className="text-primary-dark d-block">
                      Free Delivery
                    </strong>

                    <small className="text-muted">Doorstep service</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-5 text-center" id="service">
        <div className="container py-5">
          <h2 className="display-5 fw-bold text-primary-light mb-5">
            Our Services
          </h2>

          <div className="row">
            {services.map((service, idx) => (
              <div className="col-lg-3 col-md-6 mb-4" key={idx}>
                <div className="card service-card h-100 p-4 shadow-sm border-0">
                  <div className="card-body">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                      style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "#B89AC320",
                      }}
                    >
                      <i
                        className={`bi ${service.icon}`}
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
                      <i className="bi bi-arrow-right me-1"></i>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 text-center mb-4 mb-lg-0">
              <div className="worker-card">
                <i className="bi bi-droplet-half fs-1"></i>
                <h4 className="mt-3">Fresh Clothes, Zero Stress</h4>
              </div>
            </div>

            <div className="col-lg-7">
              <h2 className="display-4 fw-bold text-primary-light mb-4">
                Getting Tired
                <br />
                With Your Laundry?
              </h2>

              <p className="text-muted mb-4">
                We make laundry simple with doorstep pickup, safe washing
                process and clean packaging.
              </p>

              <p className="text-muted mb-4">
                Perfect for students, working professionals, families and busy
                lifestyle users.
              </p>

              <button className="btn btn-theme">Call Us Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
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
                      You book a pickup, our team collects clothes, cleans them
                      and delivers them back.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <i
                className="bi bi-question-circle"
                style={{
                  fontSize: "8rem",
                  color: "#B89AC3",
                }}
              ></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
