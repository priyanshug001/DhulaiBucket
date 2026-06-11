import React, { useMemo, useState } from "react";

import {
    FaTruck,
    FaRobot,
    FaCheck,
    FaCamera,
    FaVideo,
    FaLeaf,
    FaGift,
    FaMapMarkerAlt,
    FaTshirt,
    FaCrown,
    FaShoePrints,
    FaClipboardList,
    FaBolt,
    FaSprayCan,
} from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";
import booking from "../assets/images/booking.png"

const services = [
    { name: "Wash & Fold", price: 120, icon: <FaTshirt /> },
    { name: "Dry Cleaning", price: 200, icon: <FaCrown /> },
    { name: "Shoe Spa", price: 250, icon: <FaShoePrints /> },
    { name: "Express Laundry", price: 399, icon: <FaBolt /> },
];

const addOns = [
    { name: "Live Laundry Tracking", price: 49, icon: <FaTruck /> },
    { name: "Before/After Photos", price: 39, icon: <FaCamera /> },
    { name: "Fabric Care Report", price: 59, icon: <FaLeaf /> },
    { name: "AI Wardrobe Care", price: 99, icon: <FaRobot /> },
    { name: "Video Proof Packaging", price: 49, icon: <FaVideo /> },
    { name: "Outfit Ready Packaging", price: 79, icon: <FaGift /> },
];

const fragrances = [
    "Luxury Hotel",
    "Fresh Rain",
    "Lavender",
    "Oud",
    "Coffee",
    "Rose",
    "Baby Soft",
];

const bottomFeatures = [
    ["Live Laundry Tracking", "Real-time status updates", <FaTruck />],
    ["AI Wardrobe Care", "Smart care suggestions", <FaRobot />],
    ["Perfume Based Laundry", "Luxury fragrance options", <FaSprayCan />],
    ["Fabric Care Report", "Detailed fabric analysis", <FaClipboardList />],
    ["Video Proof Packaging", "Before delivery video", <FaVideo />],
];

const Booking = () => {
    const [selectedService, setSelectedService] = useState(services[0]);
    const [selectedAddons, setSelectedAddons] = useState([
        "Live Laundry Tracking",
        "Before/After Photos",
        "Video Proof Packaging",
    ]);
    const [fragrance, setFragrance] = useState("Lavender");
    const [plan, setPlan] = useState("No Subscription");
    const [timeSlot, setTimeSlot] = useState("10 AM - 1 PM");

    const addonTotal = useMemo(() => {
        return addOns
            .filter((addon) => selectedAddons.includes(addon.name))
            .reduce((sum, addon) => sum + addon.price, 0);
    }, [selectedAddons]);

    const total = selectedService.price + addonTotal;

    const toggleAddon = (addonName) => {
        setSelectedAddons((prev) =>
            prev.includes(addonName)
                ? prev.filter((item) => item !== addonName)
                : [...prev, addonName]
        );
    };

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
                        src={booking}
                        alt="Services"
                        className="w-100"
                        style={{
                            height: "320px",
                        }}
                    />
                </div>
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-lg-9">
                            <div className="card border-0 shadow-sm rounded-4 mb-3">
                                <div className="card-body p-4">
                                    <h5 className="fw-bold mb-3">1. Select Service</h5>
                                    <div className="row g-3">
                                        {services.map((service) => (
                                            <div className="col-md-6 col-xl-3" key={service.name}>
                                                <button

                                                    className={`card-btn p-3 w-100 h-100 d-flex ${selectedService.name === service.name ? "selected" : ""

                                                        }`}

                                                    onClick={() => setSelectedService(service)}
                                                >
                                                    <div className="icon-circles rounded-circle d-flex justify-content-center me-2 mb-2 align-items-center fs-5 text-lavender">{service.icon}</div>
                                                    <p className="fw-normal mb-0" style={{fontSize:"12px"}}>{service.name} <br />
                                                        <span className="fw-normal">₹{service.price}</span>
                                                    </p>
                                                </button>
                                            </div>

                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="row g-3">
                                <div className="col-lg-6">
                                    <div className="card border-0 shadow-sm rounded-4 h-100">
                                        <div className="card-body p-4">
                                            <h5 className="fw-bold mb-3">2. Choose Smart Add-ons</h5>

                                            <div className="row g-3">

                                                {addOns.map((addon) => (
                                                    <div className="col-md-6" key={addon.name}>
                                                        <button

                                                            className={`addon-btn p-2 w-100 ${selectedAddons.includes(addon.name) ? "selected" : ""

                                                                }`}

                                                            onClick={() => toggleAddon(addon.name)}
                                                        >
                                                            <span className="text-lavender">{addon.icon}</span>
                                                            <div className="text-start flex-grow-1">
                                                                <div className="fw-bold small">{addon.name}</div>
                                                                <small>₹{addon.price}</small>
                                                            </div>

                                                            {selectedAddons.includes(addon.name) && <FaCheck />}
                                                        </button>
                                                    </div>

                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="col-lg-6">
                                    <div className="card border-0 shadow-sm rounded-4 h-100">
                                        <div className="card-body p-4">
                                            <h5 className="fw-bold mb-3">4. Subscription Plan</h5>

                                            <select

                                                className="form-select form-select-lg rounded-3 mb-4"

                                                value={plan}

                                                onChange={(e) => setPlan(e.target.value)}
                                            >
                                                <option>No Subscription</option>
                                                <option>Student Plan ₹799/month</option>
                                                <option>Premium Plan ₹1999/month</option>
                                                <option>Family Plan ₹3499/month</option>
                                                <option>Hostel / PG Plan</option>
                                            </select>

                                            <h5 className="fw-bold mb-3">5. Pickup Details</h5>

                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <input className="form-control form-control-lg rounded-3" placeholder="Full Name" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input className="form-control form-control-lg rounded-3" placeholder="Mobile Number" />
                                                </div>
                                                <div className="col-12">
                                                    <input className="form-control form-control-lg rounded-3" placeholder="Pickup Address" />
                                                </div>
                                                <div className="col-md-6">
                                                    <select

                                                        className="form-select form-select-lg rounded-3"

                                                        value={timeSlot}

                                                        onChange={(e) => setTimeSlot(e.target.value)}
                                                    >
                                                        <option>10 AM - 1 PM</option>
                                                        <option>1 PM - 4 PM</option>
                                                        <option>6 PM - 9 PM</option>
                                                        <option>10 PM - 2 AM Midnight Pickup</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <button className="btn bg-lavender text-white btn-lg rounded-3 w-100 fw-bold">
                                                        <FaMapMarkerAlt className="me-2" /> Use Current Location
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="card border-0 shadow-sm rounded-4">
                                        <div className="card-body p-4">
                                            <h5 className="fw-bold mb-3">3. Perfume Based Laundry</h5>

                                            <div className="row g-3">

                                                {fragrances.map((item) => (
                                                    <div className="col-6 col-md-4 col-xl" key={item}>
                                                        <button

                                                            className={`card-btn p-3 small-card w-100 ${fragrance === item ? "selected" : ""

                                                                }`}

                                                            onClick={() => setFragrance(item)}
                                                        >

                                                            {item}
                                                        </button>
                                                    </div>

                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="alert midnight-strip border-0 rounded-4 text-center fw-bold mb-0">

                                        🌙 Midnight Pickup Available: 10 PM – 2 AM
                                        <br />
                                        <small>Perfect for Students & IT Professionals</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <aside className="card border-0 shadow-sm rounded-4 sticky-summary">
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-4">
                                        <FaClipboardList className="text-lavender me-2" />

                                        Order Summary
                                    </h6>

                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Service</span>
                                        <b>{selectedService.name}</b>
                                    </div>

                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Service Price</span>
                                        <b>₹{selectedService.price}</b>
                                    </div>

                                    <hr />

                                    <h6 className="fw-bold mb-3">Selected Add-ons</h6>

                                    {addOns

                                        .filter((addon) => selectedAddons.includes(addon.name))

                                        .map((addon) => (
                                            <div className="d-flex justify-content-between mb-3" key={addon.name}>
                                                <span>
                                                    <FaCheck className="text-lavender me-2" />

                                                    {addon.name}
                                                </span>
                                                <b>₹{addon.price}</b>
                                            </div>

                                        ))}

                                    <hr />

                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Fragrance</span>
                                        <b>{fragrance}</b>
                                    </div>

                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Plan</span>
                                        <b>{plan}</b>
                                    </div>

                                    <div className="d-flex justify-content-between mb-4">
                                        <span>Time Slot</span>
                                        <b>{timeSlot}</b>
                                    </div>

                                    <div className="p-3 rounded-4 total-box mb-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="fw-bold mb-0">Total Amount</h5>
                                            <h2 className="fw-bold mb-0">₹{total}</h2>
                                        </div>
                                    </div>

                                    <button className="btn bg-lavender text-white rounded-pill w-100 py-3 fw-bold">

                                        Confirm Smart Booking →
                                    </button>

                                    <p className="small text-muted text-center mt-3 mb-4">

                                        🔒 Secure Booking • Live Tracking • Quality Service
                                    </p>

                                    <div className="row g-3 text-center">

                                        {[

                                            ["Live Tracking", <FaTruck />],

                                            ["AI Care", <FaRobot />],

                                            ["Express", <FaBolt />],

                                            ["Premium", <FaCrown />],

                                        ].map((item) => (
                                            <div className="col-6" key={item[0]}>
                                                <div className="rounded-4 bg-light p-3 h-100">
                                                    <div className="text-lavender fs-4">{item[1]}</div>
                                                    <small className="fw-bold">{item[0]}</small>
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>

                    <div className="card border-0 shadow-sm rounded-4 mt-4">
                        <div className="card-body">
                            <div className="row g-3 text-center">

                                {bottomFeatures.map((feature) => (
                                    <div className="col-md" key={feature[0]}>
                                        <div className="d-flex align-items-center justify-content-center gap-3">
                                            <span className="feature-icon">{feature[2]}</span>
                                            <div className="text-start">
                                                <div className="fw-bold">{feature[0]}</div>
                                                <small className="text-muted">{feature[1]}</small>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );

};

export default Booking;
