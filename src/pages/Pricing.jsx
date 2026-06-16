import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import pricing from "../assets/images/pricing.png"

import {
    FaCheckCircle,
    FaGraduationCap,
    FaCrown,
    FaUsers,
    FaGem,
    FaClock,
    FaShoePrints,
    FaVideo,
    FaClipboardList,
    FaTruck,
    FaRobot,
    FaSprayCan,
    FaGift,
    FaTshirt,
} from "react-icons/fa";

const plans = [
    {
        title: "Student Plan",
        price: "₹799",
        sub: "/month",
        forText: "Perfect For Students & Bachelors",
        icon: <FaGraduationCap />,
        button: "Get Started",
        features: [
            "25 Clothes Per Month",
            "Weekly Pickup",
            "Live Laundry Tracking",
            "Fabric Care Report",
            "Midnight Pickup Access",
            "Basic Perfume Option",
        ],
    },
    {
        title: "Premium Plan",
        price: "₹1999",
        sub: "/month",
        forText: "Perfect For Working Professionals",
        icon: <FaCrown />,
        button: "Choose Premium",
        badge: "MOST POPULAR",
        soft: true,
        features: [
            "Unlimited Ironing",
            "Express Delivery",
            "AI Wardrobe Care",
            "Live Laundry Tracking",
            "Before/After Photos",
            "Video Proof Packaging",
            "Perfume Customization",
        ],
    },
    {
        title: "Family Plan",
        price: "₹3499",
        sub: "/month",
        forText: "Perfect For Families",
        icon: <FaUsers />,
        button: "Choose Family",
        features: [
            "Family Laundry Service",
            "Priority Processing",
            "Weekly Pickup",
            "AI Fabric Suggestions",
            "Video Proof Packaging",
            "Perfume Selection",
            "Live Tracking",
        ],
    },
    {
        title: "Royal Luxury Plan",
        price: "₹5999",
        sub: "/month",
        forText: "Perfect For Luxury Customers",
        icon: <FaGem />,
        button: "Go Royal",
        badge: "BEST VALUE",
        dark: true,
        features: [
            "Wedding Wear Protection",
            "Lehenga Preservation",
            "Sherwani Care",
            "Saree Restoration",
            "Hyper Personalized Packaging",
        ],
    },
];

const addOns = [
    ["Emergency 2-Hour Laundry", "₹399/order", <FaClock />],
    ["Sneaker Spa", "₹250/pair", <FaShoePrints />],
    ["Wedding Wear Protection", "₹999/order", <FaTshirt />],
    ["Midnight Pickup", "₹99/order", <FaClock />],
    ["Video Proof Packaging", "₹49/order", <FaVideo />],
    ["Fabric Care Report", "₹59/order", <FaClipboardList />],
];

const features = [
    ["Live Laundry Tracking", <FaTruck />],
    ["AI Wardrobe Care", <FaRobot />],
    ["Perfume Based Laundry", <FaSprayCan />],
    ["Midnight Pickup", <FaClock />],
    ["Outfit Ready Packaging", <FaGift />],
    ["Wedding Wear Protection", <FaTshirt />],
];

const Pricing = () => {
    return (
        <>
            <Header />
            <section
                id="pricing"
                className="py-5"
                style={{
                    background:
                        "linear-gradient(135deg, #f8f6fb, #f2edf7)",
                }}
            >

                <div className="service-image mt-4">
                    <img
                        src={pricing}
                        alt="Services"
                        className="w-100"
                        style={{
                            height: "320px",
                        }}
                    />
                </div>

                <div className="container py-5">
                    <h2 className="fw-bold text-navy mb-2">
                        CHOOSE YOUR <br />
                        <span className="text-lavender">PERFECT LAUNDRY PLAN</span>
                    </h2>

                    <p className="fs-6 fw-bold text-navy">
                        Smart Laundry Solutions For Every Lifestyle
                    </p>

                    <div className="row g-4 justify-content-center mt-4">
                        {plans.map((plan) => (
                            <div className="col-12 col-md-6 col-xl-3 d-flex" key={plan.title}>
                                <div
                                    className={`card border-0 shadow rounded-4 w-100 position-relative pricing-card ${plan.dark ? "royal-card text-white" : plan.soft ? "soft-card" : ""
                                        }`}
                                >
                                    {plan.badge && (
                                        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-lavender text-navy px-3 py-2">
                                            ★ {plan.badge} ★
                                        </span>
                                    )}

                                    <div className="card-body p-4 d-flex flex-column text-center">
                                        <div className="icon-circle mx-auto mb-3 text-lavender rounded-circle d-flex align-items-center justify-content-center fs-4">{plan.icon}</div>

                                        <h5 className="fw-semibold text-uppercase">{plan.title}</h5>
                                        <p className={plan.dark ? "text-white" : "text-muted"} style={{ fontSize: "15px" }}>
                                            {plan.forText}
                                        </p>

                                        <div className="my-1">
                                            <h5 className="fw-bold text-lavender">
                                                {plan.price}
                                                <span className="fw-bold ms-1">{plan.sub}</span>
                                            </h5>

                                        </div>

                                        <hr />

                                        <ul className="list-unstyled text-start small flex-grow-1">
                                            {plan.features.map((feature) => (
                                                <li className="mb-2 fw-normal" key={feature} style={{ fontSize: "13px" }}>
                                                    <FaCheckCircle className="me-2 text-lavender" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <a
                                            href="#book"
                                            className="btn bg-lavender text-white rounded-pill fw-semibold py-2 mt-1"
                                        >
                                            {plan.button}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h4 className="fw-bold text-lavender mt-5 mb-3">
                        PREMIUM ADD-ON SERVICES
                    </h4>

                    <div className="row g-3 justify-content-center mb-3">
                        {addOns.map((item) => (
                            <div className="col-6 col-md-4 col-xl-2" key={item[0]}>
                                <div className="card border-0 shadow-sm rounded-4 h-100">
                                    <div className="card-body p-3 gap-3 text-center">
                                        <span className="text-lavender fs-4 icon-circle  mx-auto rounded-circle d-flex justify-content-center align-items-center mb-2">{item[2]}</span>
                                        <div className="text-center">
                                            <p className="fw-normal small mb-0">{item[0]}</p>
                                            <p className="fw-normal text-lavender mb-0">{item[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row g-3 justify-content-center">
                        {features.map((item) => (
                            <div className="col-6 col-md-4 col-xl-2" key={item[0]}>
                                <div className="card border-0 shadow-sm rounded-4 h-100">
                                    <div className="card-body p-3 text-center">
                                        <span className="text-lavender fs-4 icon-circle mx-auto rounded-circle d-flex justify-content-center align-items-center mb-2">
                                            {item[1]}
                                        </span>

                                        <p className="fw-normal small mb-0">
                                            {item[0]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card border-0 shadow-sm rounded-4 mt-4 cta-card">
                        <div className="card-body p-4">
                            <div className="row align-items-center g-3">
                                <div className="col-lg-7 text-lg-start text-center">
                                    <h3 className="fw-bold text-lavender mb-1">
                                        EXPERIENCE THE FUTURE OF LAUNDRY
                                    </h3>
                                    <p className="mb-0 fw-semibold">
                                        Live Tracking • AI Care • Premium Packaging • Express Delivery
                                    </p>
                                </div>

                                <div className="col-lg-5 text-lg-end text-center">
                                    <a href="#booking" className="btn bg-lavender text-white rounded-pill px-5 py-3 fw-bold">
                                        Book Pickup Now →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Pricing