import React, { useState } from "react";
import {
  FaUpload,
  FaSpinner,
  FaMagic,
  FaCopy,
  FaClipboardList,
  FaShieldAlt,
  FaTshirt,
  FaHeart,
  FaSun,
  FaRupeeSign,
  FaTruck,
  FaInfoCircle,
  FaCrown,
  FaBoxOpen,
  FaSpa,
  FaUserShield,
  FaSprayCan,
  FaSoap,
  FaClock,
  FaTint,
  FaThermometerHalf,
  FaTag,
  FaStar,
  FaExclamationTriangle,
  FaQrcode,
  FaRobot,
} from "react-icons/fa";

const API_URL = "http://127.0.0.1:5000";

const theme = {
  navy: "#0B0A2A",
  lavender: "#B89AC3",
  white: "#FFFFFF",
  lightBg: "#F5F7FB",
};

const defaultDemoReport = {
  clothName: "Demo Cloth",
  category: "Casual Wear",
  visibleColor: "Demo Mode",
  possibleFabric: "Possibly cotton/blended fabric",
  fabricConfidence: "Demo Mode",
  washType: "Normal Wash",
  washCycle: "Gentle Cycle",
  waterTemperature: "Cold Water",
  detergentType: "Mild Liquid Detergent",
  dryCleanNeeded: "No",
  fabricRisk: "Medium",
  colorBleedingRisk: "Low",
  shrinkageRisk: "Medium",
  wrinkleRisk: "Medium",
  stainVisible: "Visible / Demo",
  stainSeverity: "Medium",
  recommendedFragrance: "Lavender",
  nextWashSuggestion: "After 2-3 wears",
  estimatedLaundryCost: "₹120",
  estimatedDeliveryTime: "24 Hours",
  clothHealthScore: "82/100",
  cleanlinessScore: "60/100",
  careScore: "82/100",
  passportId: "DB-AI-458721",
  shortSuggestion:
    "Dhulai Bucket AI demo report active hai. Real AI analysis available hote hi updated report show hogi.",
  warnings: ["Dhulai Bucket AI demo mode active.", "Demo report shown."],
};

const AIWardrobe = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(defaultDemoReport);

  const services = [
    ["Laundry Care", "Professional washing", <FaSoap />],
    ["Fabric Care", "Fabric protection", <FaShieldAlt />],
    ["Stain Removal", "Tough stain treatment", <FaTint />],
    ["Dry Cleaning", "Sensitive fabric care", <FaSpa />],
    ["Perfume Laundry", "Long lasting fragrance", <FaSprayCan />],
    ["AI Wardrobe Care", "Smart cloth care", <FaTshirt />],
    ["Pickup / Delivery", "Fast doorstep service", <FaTruck />],
    ["Premium Packaging", "Hygienic packing", <FaBoxOpen />],
  ];

  const included = [
    ["Expert Care", "Trained staff", <FaUserShield />],
    ["Safe Cleaning", "Fabric safe wash", <FaShieldAlt />],
    ["Fresh Fragrance", "Long lasting scent", <FaSpa />],
    ["Hygienic Pack", "Premium packing", <FaBoxOpen />],
    ["On Time", "Fast delivery", <FaTruck />],
  ];

  const reportRows = [
    ["Cloth Name", report.clothName, <FaTshirt />],
    ["Category", report.category, <FaClipboardList />],
    ["Visible Color", report.visibleColor, <FaTag />],
    ["Possible Fabric", report.possibleFabric, <FaClipboardList />],
    ["Fabric Confidence", report.fabricConfidence, <FaShieldAlt />],
    ["Wash Type", report.washType, <FaSoap />],
    ["Wash Cycle", report.washCycle, <FaClock />],
    ["Water Temperature", report.waterTemperature, <FaThermometerHalf />],
    ["Detergent Type", report.detergentType, <FaSoap />],
    ["Dry Clean Needed", report.dryCleanNeeded, <FaSpa />],
    ["Fabric Risk", report.fabricRisk, <FaShieldAlt />],
    ["Color Bleeding Risk", report.colorBleedingRisk, <FaTint />],
    ["Shrinkage Risk", report.shrinkageRisk, <FaTshirt />],
    ["Wrinkle Risk", report.wrinkleRisk, <FaClipboardList />],
    ["Stain Visible", report.stainVisible, <FaSun />],
    ["Stain Severity", report.stainSeverity, <FaTint />],
    ["Recommended Fragrance", report.recommendedFragrance, <FaSpa />],
    ["Next Wash Suggestion", report.nextWashSuggestion, <FaClock />],
    ["Cloth Health Score", report.clothHealthScore, <FaHeart />],
    ["Cleanliness Score", report.cleanlinessScore, <FaMagic />],
    ["Care Score", report.careScore, <FaStar />],
  ];

  const handleImageUpload = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
    setImage(URL.createObjectURL(selected));
  };

  const generateReport = async () => {
    if (!file) {
      alert("Please upload cloth image first");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch(`${API_URL}/api/analyze-cloth`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.details || data.error || "AI report failed");
      }

      setReport({
        ...defaultDemoReport,
        ...data,
        passportId:
          data.passportId || `DB-AI-${Date.now().toString().slice(-6)}`,
      });
    } catch (err) {
      alert(err.message);
      setReport(defaultDemoReport);
    } finally {
      setLoading(false);
    }
  };

  const copyReport = async () => {
    await navigator.clipboard.writeText(JSON.stringify(report, null, 2));
    alert("Report copied successfully");
  };

  const iconBoxStyle = {
    width: "46px",
    height: "46px",
    minWidth: "46px",
    background: "rgba(184,154,195,0.16)",
    color: theme.lavender,
  };

  return (
    <main style={{ background: theme.lightBg, minHeight: "100vh" }}>
      <div className="container-fluid py-4 px-3">
        <div className="row g-4">
          <aside className="col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <div className="d-flex gap-3 mb-4">
                <div
                  className="rounded-4 d-flex align-items-center justify-content-center"
                  style={iconBoxStyle}
                >
                  <FaUpload />
                </div>
                <div>
                  <h5 className="fw-bold mb-1" style={{ color: theme.navy }}>
                    Upload Cloth Image
                  </h5>
                  <p className="small text-muted mb-0">JPG, PNG, WEBP</p>
                </div>
              </div>

              <label
                className="w-100 rounded-4 d-flex align-items-center justify-content-center text-center overflow-hidden"
                style={{
                  height: "250px",
                  border: `2px dashed ${theme.lavender}`,
                  background: "rgba(184,154,195,0.12)",
                  color: theme.lavender,
                  cursor: "pointer",
                }}
              >
                {image ? (
                  <img
                    src={image}
                    alt="Uploaded cloth"
                    className="w-100 h-100 object-fit-cover"
                  />
                ) : (
                  <div>
                    <FaUpload size={42} />
                    <p className="fw-bold mt-3 mb-0">Click to upload image</p>
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageUpload}
                />
              </label>

              <div
                className="alert mt-3 mb-0 fw-semibold"
                style={{
                  background: "rgba(184,154,195,0.14)",
                  color: theme.navy,
                }}
              >
                <FaShieldAlt className="me-2" />
                Image uploaded successfully
              </div>

              <button
                className="btn w-100 rounded-3 py-3 fw-bold mt-4 text-white"
                style={{ background: theme.lavender }}
                onClick={generateReport}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <FaSpinner className="me-2" /> Analyzing...
                  </>
                ) : (
                  <>
                    <FaMagic className="me-2" /> Generate AI Report
                  </>
                )}
              </button>

              <button
                className="btn btn-light border w-100 rounded-3 py-3 fw-bold mt-3"
                onClick={copyReport}
                style={{ color: theme.navy }}
              >
                <FaCopy className="me-2" /> Copy Report JSON
              </button>

              <div
                className="alert mt-4 mb-0 small"
                style={{
                  background: "rgba(184,154,195,0.14)",
                  color: theme.navy,
                }}
              >
                <FaInfoCircle className="me-2" />
                <b>Note:</b> Dhulai Bucket AI demo report is shown.
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-4" style={{ color: theme.navy }}>
                <FaRobot className="me-2" style={{ color: theme.lavender }} />
                Dhulai Bucket Services
              </h5>

              {services.map((item) => (
                <div className="d-flex gap-3 mb-3" key={item[0]}>
                  <div
                    className="rounded-4 d-flex align-items-center justify-content-center"
                    style={iconBoxStyle}
                  >
                    {item[2]}
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: theme.navy }}>
                      {item[0]}
                    </h6>
                    <p className="small text-muted mb-0">{item[1]}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="card border-0 shadow-sm rounded-4 p-4"
              style={{ background: "rgba(184,154,195,0.12)" }}
            >
              <h5 className="fw-bold" style={{ color: theme.navy }}>
                <FaCrown className="me-2" style={{ color: theme.lavender }} />
                Join Subscription Plan
              </h5>
              <p className="small text-muted">
                Save more with Dhulai Bucket subscription plans.
              </p>
              <button className="btn btn-light rounded-3 fw-bold px-4">
                View Plans
              </button>
            </div>
          </aside>

          <section className="col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <div className="d-flex justify-content-between align-items-start mb-4 flex-wrap gap-3">
                <h1 className="fw-bold mb-0" style={{ color: theme.navy }}>
                  <FaClipboardList
                    className="me-3"
                    style={{ color: theme.lavender }}
                  />
                  AI Fabric Care Report
                </h1>

                <div className="text-end">
                  <span
                    className="badge rounded-pill px-3 py-2 d-block mb-2"
                    style={{ background: theme.navy }}
                  >
                    DEMO MODE
                  </span>
                  <span
                    className="badge rounded-pill px-3 py-2"
                    style={{
                      background: "rgba(184,154,195,0.18)",
                      color: theme.navy,
                    }}
                  >
                    Dhulai Bucket AI
                  </span>
                </div>
              </div>

              <div className="row g-3 mb-4">
                {[
                  [<FaHeart />, "Health Score", report.clothHealthScore],
                  [<FaSun />, "Stain Severity", report.stainSeverity],
                  [<FaRupeeSign />, "Estimated Cost", report.estimatedLaundryCost],
                  [<FaTruck />, "Delivery Time", report.estimatedDeliveryTime],
                ].map((item, index) => (
                  <div className="col-6 col-md-3" key={index}>
                    <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3">
                      <div className="fs-5 mb-2" style={{ color: theme.lavender }}>
                        {item[0]}
                      </div>
                      <h6 className="fw-bold" style={{ color: theme.navy }}>
                        {item[1]}
                      </h6>
                      <h4 className="fw-bold mt-3" style={{ color: theme.lavender }}>
                        {item[2]}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card border rounded-4 p-4 mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-3">
                  <h4 className="fw-bold mb-0" style={{ color: theme.navy }}>
                    <FaTshirt className="me-2" style={{ color: theme.lavender }} />
                    Cloth Information
                  </h4>

                  <div
                    className="rounded-4 px-3 py-2 d-flex align-items-center gap-3"
                    style={{ background: "rgba(184,154,195,0.14)" }}
                  >
                    <div>
                      <small
                        className="fw-bold d-block"
                        style={{ color: theme.lavender }}
                      >
                        AI Laundry Passport ID
                      </small>
                      <strong style={{ color: theme.navy }}>
                        {report.passportId}
                      </strong>
                    </div>
                    <FaQrcode className="fs-3" style={{ color: theme.lavender }} />
                  </div>
                </div>

                {reportRows.map((row) => (
                  <div
                    className="d-flex align-items-center gap-3 py-2 border-bottom"
                    key={row[0]}
                  >
                    <span
                      className="rounded-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "28px",
                        height: "28px",
                        minWidth: "28px",
                        background: "rgba(184,154,195,0.14)",
                        color: theme.lavender,
                      }}
                    >
                      {row[2]}
                    </span>

                    <span className="fw-bold flex-grow-1" style={{ color: theme.navy }}>
                      {row[0]}
                    </span>

                    <strong className="text-end" style={{ color: theme.lavender }}>
                      {row[1] || "N/A"}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="card border-0 rounded-4 p-4 mb-4">
                <h4 className="fw-bold mb-4" style={{ color: theme.navy }}>
                  What's Included in Our Service
                </h4>

                <div className="row g-3 text-center">
                  {included.map((item) => (
                    <div className="col-6 col-md" key={item[0]}>
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
                        style={{
                          width: "56px",
                          height: "56px",
                          background: "rgba(184,154,195,0.14)",
                          color: theme.lavender,
                        }}
                      >
                        {item[2]}
                      </div>
                      <h6 className="fw-bold mb-1" style={{ color: theme.navy }}>
                        {item[0]}
                      </h6>
                      <p className="small text-muted mb-0">{item[1]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="alert mb-0 small"
                style={{
                  background: "rgba(184,154,195,0.14)",
                  color: theme.navy,
                }}
              >
                <FaInfoCircle className="me-2" />
                <b>Note:</b> This is a Dhulai Bucket AI demo report. Real AI
                analysis will be available when live AI service is active.
              </div>
            </div>
          </section>

          <aside className="col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-4" style={{ color: theme.navy }}>
                <FaMagic className="me-2" style={{ color: theme.lavender }} />
                AI Suggestion
              </h5>

              <div
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
                style={{
                  width: "135px",
                  height: "135px",
                  background: "rgba(184,154,195,0.14)",
                  color: theme.lavender,
                  fontSize: "72px",
                  border: `8px solid rgba(184,154,195,0.24)`,
                }}
              >
                <FaTshirt />
              </div>

              <p className="fw-semibold mt-4" style={{ color: theme.navy }}>
                {report.shortSuggestion}
              </p>
            </div>

            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-4" style={{ color: theme.navy }}>
                <FaExclamationTriangle
                  className="me-2"
                  style={{ color: theme.lavender }}
                />
                Care Warnings
              </h5>

              <div
                className="alert mb-0"
                style={{
                  background: "rgba(184,154,195,0.14)",
                  color: theme.navy,
                }}
              >
                {(report.warnings || []).map((warning) => (
                  <p className="mb-2 fw-semibold" key={warning}>
                    • {warning}
                  </p>
                ))}
              </div>
            </div>

            <div
              className="card border-0 shadow-sm rounded-4 p-4 mb-4"
              style={{ background: "rgba(184,154,195,0.12)" }}
            >
              <h5 className="fw-bold mb-4" style={{ color: theme.navy }}>
                <FaClipboardList
                  className="me-2"
                  style={{ color: theme.lavender }}
                />
                Service Summary
              </h5>

              {[
                ["Recommended Service", report.washType],
                ["Fragrance", report.recommendedFragrance],
                ["Packaging", "Premium"],
                ["Pickup / Delivery", "Available"],
              ].map((item) => (
                <div className="mb-3" key={item[0]}>
                  <span className="fw-bold d-block" style={{ color: theme.navy }}>
                    {item[0]}
                  </span>
                  <b style={{ color: theme.lavender }}>{item[1]}</b>
                </div>
              ))}
            </div>

            <div
              className="card border-0 shadow-sm rounded-4 p-4 text-white"
              style={{ background: theme.navy }}
            >
              <h5 className="fw-bold">
                <FaCrown className="me-2" />
                Upgrade to Premium
              </h5>
              <p className="small">
                Get real AI analysis with unlimited reports and priority support.
              </p>
              <button className="btn btn-light rounded-3 fw-bold w-100">
                Explore Plans
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default AIWardrobe;