import React, { useState } from "react";
import {
  FaTruck,
  FaShieldAlt,
  FaBolt,
  FaCalendarAlt,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaClipboardList,
  FaCheckCircle,
  FaGift,
  FaPercent,
  FaLocationArrow,
} from "react-icons/fa";

const theme = {
  navy: "#0B0A2A",
  lavender: "#B89AC3",
  lightBg: "#F5F7FB",
};

const NBooking = () => {
  const baseAmount = 249;
  const expressCharge = 99;

  const [address, setAddress] = useState("");
  const [locationLoading, setLocationLoading] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponStatus, setCouponStatus] = useState("");

  const totalBeforeDiscount = baseAmount + expressCharge;
  const finalTotal = totalBeforeDiscount - discount;

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();

    if (code === "PRIYANSHU50" || code === "DBFIRST50") {
      setDiscount(50);
      setCouponStatus("success");
    } else if (code === "FRESH10") {
      setDiscount(Math.round(totalBeforeDiscount * 0.1));
      setCouponStatus("success");
    } else {
      setDiscount(0);
      setCouponStatus("invalid");
    }
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported");
      return;
    }

    setLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          );

          const data = await response.json();
          setAddress(data.display_name || `${latitude}, ${longitude}`);
        } catch {
          setAddress(`${latitude}, ${longitude}`);
        } finally {
          setLocationLoading(false);
        }
      },
      () => {
        setLocationLoading(false);
        alert("Location access denied");
      },
    );
  };

  return (
    <main style={{ background: theme.lightBg, minHeight: "100vh" }}>
      <div className="container py-5">
        <div className="row align-items-center g-4 mb-5">
          <div className="col-lg-6">
            <span
              className="badge rounded-pill px-3 py-2 mb-3"
              style={{
                background: "rgba(184,154,195,0.18)",
                color: theme.navy,
              }}
            >
              FRESH. CLEAN. DELIVERED.
            </span>

            <h1 className="display-4 fw-bold" style={{ color: theme.navy }}>
              Book Your <br />
              <span style={{ color: theme.lavender }}>Laundry Pickup</span>
            </h1>

            <p className="lead text-muted">
              Fresh laundry service at your doorstep.
            </p>

            <div className="row g-3 mt-3">
              {[
                [<FaTruck />, "Free Pickup & Delivery"],
                [<FaShieldAlt />, "Hygienic Cleaning"],
                [<FaBolt />, "Express Delivery"],
              ].map((item) => (
                <div className="col-md-4 col-sm-6" key={item[1]}>
                  <div className="d-flex align-items-center gap-2">
                    <span style={{ color: theme.lavender }}>{item[0]}</span>
                    <b style={{ color: theme.navy }}>{item[1]}</b>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src="/images/laundry-basket.png"
              alt="Laundry Basket"
              className="img-fluid"
              style={{ maxHeight: "330px" }}
            />
          </div>
        </div>

        <div className="row g-4 align-items-start">
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h3 className="fw-bold mb-1" style={{ color: theme.navy }}>
                <FaCalendarAlt
                  className="me-2"
                  style={{ color: theme.lavender }}
                />
                Schedule Your Pickup
              </h3>

              <p className="text-muted mb-4">
                Fill in the details below to book your laundry pickup.
              </p>

              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label fw-bold">Select Service</label>
                  <select className="form-select py-3 rounded-3">
                    <option>Wash & Fold</option>
                    <option>Wash & Iron</option>
                    <option>Dry Cleaning</option>
                    <option>Premium Care</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-bold">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <FaUser style={{ color: theme.lavender }} />
                    </span>
                    <input
                      className="form-control py-3"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-bold">Phone Number</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <FaPhone style={{ color: theme.lavender }} />
                    </span>
                    <input
                      className="form-control py-3"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <label className="form-label fw-bold">Pickup Address</label>

                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <FaMapMarkerAlt style={{ color: theme.lavender }} />
                    </span>
                    <input
                      className="form-control py-3"
                      placeholder="Enter complete address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-light border rounded-pill fw-bold mt-2"
                    onClick={getCurrentLocation}
                    disabled={locationLoading}
                  >
                    <FaLocationArrow
                      className="me-2"
                      style={{ color: theme.lavender }}
                    />
                    {locationLoading
                      ? "Fetching Location..."
                      : "Use Current Location"}
                  </button>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-bold">Pickup Date</label>
                  <input type="date" className="form-control py-3 rounded-3" />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-bold">Pickup Time</label>
                  <select className="form-select py-3 rounded-3">
                    <option>10:00 AM - 12:00 PM</option>
                    <option>12:00 PM - 03:00 PM</option>
                    <option>03:00 PM - 06:00 PM</option>
                    <option>06:00 PM - 09:00 PM</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-bold">Select Fragrance</label>
                  <select className="form-select py-3 rounded-3">
                    <option>Lavender Fresh</option>
                    <option>Rose Bloom</option>
                    <option>Ocean Breeze</option>
                    <option>No Fragrance</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-bold">Delivery Type</label>
                  <select className="form-select py-3 rounded-3">
                    <option>Express Delivery (4-6 hrs) + ₹99</option>
                    <option>Standard Delivery Free</option>
                    <option>Fast Delivery + ₹49</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label fw-bold">
                    Special Instructions
                  </label>
                  <textarea
                    className="form-control rounded-3"
                    rows="3"
                    placeholder="Any special instructions..."
                  ></textarea>
                </div>

                <div className="col-12">
                  <button
                    className="btn text-white w-100 rounded-3 py-3 fw-bold mt-2"
                    style={{ background: theme.lavender }}
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h3 className="fw-bold mb-4" style={{ color: theme.navy }}>
                <FaClipboardList
                  className="me-2"
                  style={{ color: theme.lavender }}
                />
                Order Summary
              </h3>
              {[
                ["Selected Service", "Wash & Fold"],
                ["Estimated Weight", "5 Kg"],
                ["Fragrance", "Lavender Fresh"],
                ["Delivery Type", "Express Delivery"],
                ["Pickup & Delivery", "Free"],
                ["Express Charge", `₹${expressCharge}`],
              ].map((item) => (
                <div
                  className="d-flex justify-content-between border-bottom py-2"
                  key={item[0]}
                >
                  <span className="fw-semibold">{item[0]}</span>
                  <b
                    style={{ color: item[1] === "Free" ? "green" : theme.navy }}
                  >
                    {item[1]}
                  </b>
                </div>
              ))}
              <div className="mt-4">
                <label className="form-label fw-bold">
                  <FaGift className="me-2" style={{ color: theme.lavender }} />
                  Referral / Offer Code
                </label>

                <div className="input-group">
                  <input
                    className="form-control py-3"
                    placeholder="Enter code e.g. PRIYANSHU50"
                    value={coupon}
                    onChange={(e) => {
                      setCoupon(e.target.value);
                      setCouponStatus("");
                    }}
                  />
                  <button
                    className="btn text-white px-4 fw-bold"
                    style={{ background: theme.lavender }}
                    onClick={applyCoupon}
                  >
                    Apply
                  </button>
                </div>

                {couponStatus === "success" && (
                  <div className="alert alert-success mt-3 mb-0 fw-semibold">
                    <FaCheckCircle className="me-2" />
                    Coupon Applied Successfully! You saved ₹{discount}
                  </div>
                )}

                {couponStatus === "invalid" && (
                  <div className="alert alert-danger mt-3 mb-0 fw-semibold">
                    Invalid Coupon Code
                  </div>
                )}
              </div>
              {/*
              <div
                className="rounded-4 p-3 mt-4"
                style={{ background: "rgba(184,154,195,0.14)" }}
              >
                <h6 className="fw-bold">
                  <FaPercent
                    className="me-2"
                    style={{ color: theme.lavender }}
                  />
                  Available Codes
                </h6>
                <p className="mb-1 small">PRIYANSHU50 - ₹50 OFF</p>
                <p className="mb-1 small">DBFIRST50 - ₹50 OFF</p>
                <p className="mb-0 small">FRESH10 - 10% OFF</p>
              </div>
              */}
              <div className="mt-4">
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Subtotal</span>
                  <b>₹{baseAmount}</b>
                </div>

                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Express Delivery</span>
                  <b>₹{expressCharge}</b>
                </div>

                {discount > 0 && (
                  <div className="d-flex justify-content-between text-success">
                    <span className="fw-bold">Discount</span>
                    <b>- ₹{discount}</b>
                  </div>
                )}

                <hr />

                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="fw-bold mb-0">Estimated Total</h5>
                  <h2
                    className="fw-bold mb-0"
                    style={{ color: theme.lavender }}
                  >
                    ₹{finalTotal}
                  </h2>
                </div>
              </div>
              <div
                className="rounded-4 p-3 mt-4"
                style={{ background: "rgba(184,154,195,0.14)" }}
              >
                <h6 className="fw-bold">What's Included</h6>
                {[
                  "Fabric Care Report",
                  "Perfume Laundry",
                  "Real-Time Tracking",
                  "Free Pickup & Delivery",
                  "Hygienic Cleaning",
                  "On-Time Delivery",
                ].map((item) => (
                  <p className="mb-2 fw-semibold" key={item}>
                    <FaCheckCircle
                      className="me-2"
                      style={{ color: theme.lavender }}
                    />
                    {item}
                  </p>
                ))}
              </div>
              <button
                className="btn text-white w-100 rounded-3 py-3 fw-bold mt-4"
                style={{ background: theme.lavender }}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NBooking;
