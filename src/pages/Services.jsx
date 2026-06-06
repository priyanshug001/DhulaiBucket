import React from "react";
import {
    FaTruck,
    FaTshirt,
    FaTags,
    FaSprayCan,
} from "react-icons/fa";

import Header from "../components/Header";
import "../App.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import service from "../assets/images/service.png"

const services = [
    {
        icon: <FaTruck />,
        title: "Laundry Pickup",
        desc: "Convenient doorstep pickup and delivery service for your laundry needs.",
    },
    {
        icon: <FaTshirt />,
        title: "Wash And Fold",
        desc: "Professional washing and neatly folded clothes ready for use.",
    },
    {
        icon: <FaTags />,
        title: "Bulk Discount",
        desc: "Special discounts for hotels, hostels, PGs and bulk laundry orders.",
    },
    {
        icon: <FaSprayCan />,
        title: "Dry Cleaning",
        desc: "Premium dry cleaning service for delicate and expensive garments.",
    },
];

const Services = () => {
    return (
        <>
            <Header />

            <section
                id="services"
                className="py-5"
                style={{
                    background:
                        "linear-gradient(135deg, #f8f6fb, #f2edf7)",
                }}
            >
                <div className="service-image mt-4">
                    <img
                        src={service}
                        alt="Services"
                        className="w-100"
                        style={{
                            height: "320px",
                        }}
                    />
                </div>
                <div className="container py-5">
                    <div className="row g-4">
                        {services.map((service, index) => (
                            <div
                                className="col-12 col-md-6 col-lg-3"
                                key={index}
                            >
                                <div className="card h-100 border-0 shadow-sm rounded-4 text-center service-card">
                                    <div className="card-body p-4 d-flex flex-column">
                                        <div className="service-icon fs-1 mx-auto mb-4 text-lavender d-flex justify-content-center align-items-center rounded-circle">
                                            {service.icon}
                                        </div>

                                        <h3 className="h4 fw-bold mb-3">
                                            {service.title}
                                        </h3>

                                        <p className="text-secondary flex-grow-1">
                                            {service.desc}
                                        </p>

                                        <Link
                                            to="#learn"
                                            className="text-decoration-none fw-semibold service-link text-lavender"
                                        >
                                            → Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Services;