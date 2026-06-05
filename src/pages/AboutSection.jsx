import React from "react";
import "../App.css";

const AboutSection = () => {
  return (
    <section className="about-laundry-section" id="about">
      <div className="container-fluid">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 about-image-col">
            <div className="about-splash"></div>

            <img
              src="/images/laundry-worker.png"
              alt="Laundry worker holding clothes basket"
              className="about-worker-img"
            />
          </div>

          <div className="col-lg-6 about-content-col">
            <h2>
              Getting Tired <br />
              With Your <br />
              Laundry?
            </h2>

            <p>
              We take the hassle out of laundry with professional washing, dry
              cleaning, ironing and doorstep pickup services.
            </p>

            <p>
              Our experts ensure every garment receives premium care while
              saving your valuable time with fast delivery and affordable
              pricing.
            </p>

            <a href="#booking" className="about-btn">
              Book Pickup Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
