import React from "react";
import {
  FaCheckCircle,
  FaTruck,
  FaTshirt,
  FaBoxOpen,
  FaMotorcycle,
  FaClock,
  FaWhatsapp,
  FaVideo,
  FaCamera,
} from "react-icons/fa";

const theme = {
  navy: "#0B0A2A",
  lavender: "#B89AC3",
  white: "#FFFFFF",
  lightBg: "#F5F7FB",
};

const TrackOrder = () => {
  const trackingSteps = [
    { title: "Pickup Done", time: "10:30 AM" },
    { title: "Washing", time: "11:00 AM" },
    { title: "Drying", time: "11:45 AM" },
    { title: "Ironing Done", time: "12:30 PM" },
    { title: "Quality Check", time: "12:45 PM" },
    { title: "Out For Delivery", time: "01:15 PM" },
  ];

  const smartFeatures = [
    [<FaVideo />, "Video Proof Packaging Ready"],
    [<FaWhatsapp />, "WhatsApp Updates Enabled"],
    [<FaMotorcycle />, "Rider Assigned"],
    [<FaCheckCircle />, "Fabric Care Report Ready"],
  ];

  const laundryDetails = [
    [<FaTshirt />, "Service", "Wash & Fold"],
    [<FaBoxOpen />, "Total Items", "12 Clothes"],
    [<FaTruck />, "Order ID", "#DB14589"],
  ];

  const iconCircleStyle = {
    width: "46px",
    height: "46px",
    minWidth: "46px",
    background: theme.lavender,
    color: theme.white,
  };

  const softBoxStyle = {
    background: "rgba(184,154,195,0.13)",
    color: theme.navy,
  };

  return (
    <main style={{ background: theme.lightBg, minHeight: "100vh" }}>
      <div className="container-fluid px-3 px-lg-4 py-4">
        <section
          className="rounded-4 p-4 p-lg-5 mb-4"
          style={{
            background:
              "linear-gradient(135deg, rgba(184,154,195,0.22), rgba(255,255,255,0.9))",
          }}
        >
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span
                className="badge rounded-pill px-3 py-2"
                style={{
                  background: theme.white,
                  color: theme.lavender,
                }}
              >
                Live Laundry Tracking
              </span>

              <h1
                className="display-5 fw-bold mt-3"
                style={{ color: theme.navy }}
              >
                Track Your Laundry In Real-Time
              </h1>

              <p className="lead mb-0 text-muted">
                Know exactly where your clothes are and when they'll arrive.
              </p>
            </div>

            <div className="col-lg-5">
              <div
                className="card border-0 shadow-sm rounded-4 text-center p-4 mx-lg-auto"
                style={{ maxWidth: "360px" }}
              >
                <FaClock size={34} style={{ color: theme.lavender }} />
                <h5 className="fw-bold mt-2 mb-1" style={{ color: theme.navy }}>
                  ETA
                </h5>
                <h2 className="fw-bold mb-0" style={{ color: theme.lavender }}>
                  1 Hr 25 Min
                </h2>
              </div>
            </div>
          </div>
        </section>

        <div className="row g-4 align-items-start">
          <section className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4" style={{ color: theme.navy }}>
                  Order Status
                </h4>

                <div className="d-flex flex-column gap-3">
                  {trackingSteps.map((step, index) => (
                    <div
                      className="d-flex align-items-start gap-3"
                      key={step.title}
                    >
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={iconCircleStyle}
                      >
                        <FaCheckCircle />
                      </div>

                      <div
                        className="flex-grow-1 rounded-4 p-3 d-flex justify-content-between align-items-center gap-3"
                        style={softBoxStyle}
                      >
                        <div>
                          <h6
                            className="fw-bold mb-1"
                            style={{ color: theme.navy }}
                          >
                            {step.title}
                          </h6>
                          <small className="text-muted">{step.time}</small>
                        </div>

                        <span
                          className="badge rounded-pill px-3 py-2"
                          style={{
                            background: theme.lavender,
                            color: theme.white,
                          }}
                        >
                          Completed
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4" style={{ color: theme.navy }}>
                  Laundry Details
                </h4>

                <div className="row g-3">
                  {laundryDetails.map((item) => (
                    <div className="col-md-4 col-sm-6" key={item[1]}>
                      <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                          style={{
                            width: "58px",
                            height: "58px",
                            background: "rgba(184,154,195,0.14)",
                            color: theme.lavender,
                            fontSize: "26px",
                          }}
                        >
                          {item[0]}
                        </div>

                        <h6
                          className="fw-bold mb-1"
                          style={{ color: theme.navy }}
                        >
                          {item[1]}
                        </h6>
                        <p className="mb-0 text-muted">{item[2]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4" style={{ color: theme.navy }}>
                  Before & After Photos
                </h4>

                <div className="row g-3">
                  {["Before Cleaning", "After Cleaning"].map((title) => (
                    <div className="col-md-6" key={title}>
                      <div
                        className="rounded-4 d-flex flex-column align-items-center justify-content-center text-center p-4"
                        style={{
                          minHeight: "185px",
                          border: `2px dashed ${theme.lavender}`,
                          background: theme.white,
                          color: theme.navy,
                        }}
                      >
                        <FaCamera size={40} style={{ color: theme.lavender }} />
                        <h6 className="fw-bold mt-3 mb-0">{title}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <aside className="col-lg-5">
            <div
              className="card border-0 shadow-sm rounded-4"
              style={{ position: "sticky", top: "90px" }}
            >
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4" style={{ color: theme.navy }}>
                  Smart Features
                </h4>

                <div className="d-flex flex-column gap-3">
                  {smartFeatures.map((feature) => (
                    <div
                      className="rounded-4 p-3 fw-semibold d-flex align-items-center gap-2"
                      style={softBoxStyle}
                      key={feature[1]}
                    >
                      <span style={{ color: theme.lavender }}>
                        {feature[0]}
                      </span>
                      {feature[1]}
                    </div>
                  ))}
                </div>

                <hr className="my-4" />

                <h5 className="fw-bold" style={{ color: theme.navy }}>
                  Delivery Partner
                </h5>

                <p className="mb-1 fw-semibold">Rahul Sharma</p>
                <p className="text-muted">+91 9876543210</p>

                <button
                  className="btn text-white w-100 rounded-pill fw-bold py-2"
                  style={{ background: theme.lavender }}
                >
                  Contact Rider
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default TrackOrder;
