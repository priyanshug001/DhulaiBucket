import React from "react";
import "../App.css";

const services = [
  {
    title: "Laundry Pickup",
    desc: "Convenient doorstep pickup and delivery service for your laundry needs.",
  },
  {
    title: "Wash And Fold",
    desc: "Professional washing and neatly folded clothes ready for use.",
  },
  {
    title: "Bulk Discount",
    desc: "Special discounts for hotels, hostels, PGs and bulk laundry orders.",
  },
  {
    title: "Dry Cleaning",
    desc: "Premium dry cleaning service for delicate and expensive garments.",
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="services-heading">Our Services</h2>

        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="service-box">
                <div className="service-box">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>

                  <a href="#learn" className="learn-link">
                    <span>→</span> Learn More
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
