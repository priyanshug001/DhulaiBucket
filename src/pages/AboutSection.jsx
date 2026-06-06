import React from "react";
import Header from "../components/Header";
import workerImg from "../assets/images/image.png";

const AboutSection = () => {
    return (
        <>
            <Header />
            <div className="container-fluid p-0 bg-light">
                <div className="container">
                    <section
                        className="bg-light overflow-hidden py-5 mt-5"
                    >
                        <div className="row align-items-center">
                            {/* Image Side */}
                            <div className="col-lg-6 position-relative d-flex justify-content-center align-items-end">

                                <div className="about-splash"></div>

                                <img
                                    src={workerImg}
                                    alt="Laundry Worker"
                                    className="img-fluid position-relative z-3"
                                    style={{
                                        maxWidth: "620px",
                                        width: "82%"
                                    }}
                                />
                            </div>

                            {/* Content Side */}
                            <div className="col-lg-6 px-lg-5 px-4 text-center text-lg-start">

                                <h2
                                    className="fw-black lh-1 mb-4"
                                    style={{
                                        color: "#b89ac3",
                                        fontSize: "clamp(52px,5.8vw,92px)",
                                        fontWeight: "900"
                                    }}
                                >
                                    Getting Tired <br />
                                    With Your <br />
                                    Laundry?
                                </h2>

                                <p className="fs-5 text-secondary lh-lg mb-4">
                                    We take the hassle out of laundry with professional washing,
                                    dry cleaning, ironing and doorstep pickup services.
                                </p>

                                <p className="fs-5 text-secondary lh-lg mb-4">
                                    Our experts ensure every garment receives premium care while
                                    saving your valuable time with fast delivery and affordable
                                    pricing.
                                </p>

                                <button
                                    className="btn rounded-pill px-5 py-3 fw-bold text-white"
                                    style={{
                                        backgroundColor: "#b89ac3"
                                    }}
                                >
                                    Book Pickup Now
                                </button>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default AboutSection;