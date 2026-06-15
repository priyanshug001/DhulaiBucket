import React, { useEffect, useState } from "react";
import {
  FaBox,
  FaCalendarCheck,
  FaRupeeSign,
  FaTruck,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaEye,
  FaEdit,
  FaTrash,
  FaPlus,
  FaTicketAlt,
  FaUserPlus,
  FaRoute,
  FaGift,
  FaUsers,
  FaChartLine,
  FaCog,
  FaClipboardList,
} from "react-icons/fa";

const API_URL = "http://localhost:5000";

const theme = {
  navy: "#0B0A2A",
  lavender: "#B89AC3",
  white: "#FFFFFF",
  lightBg: "#F5F7FB",
};

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [dashboardStats, setDashboardStats] = useState({
    totalOrders: 0,
    todayOrders: 0,
    revenue: 0,
    pendingPickups: 0,
  });

  const navItems = [
    ["Dashboard", <FaChartLine />],
    ["Orders", <FaClipboardList />],
    ["Customers", <FaUsers />],
    ["Riders", <FaTruck />],
    ["Coupons", <FaTicketAlt />],
    ["Settings", <FaCog />],
  ];

  const quickActions = [
    ["Create Order", <FaPlus />],
    ["Add Coupon", <FaTicketAlt />],
    ["Assign Rider", <FaUserPlus />],
    ["Update Tracking", <FaRoute />],
  ];

  const fetchDashboardData = async () => {
    try {
      const ordersRes = await fetch(`${API_URL}/api/admin/orders`);
      const ordersData = await ordersRes.json();
      setOrders(ordersData.orders || []);

      const statsRes = await fetch(`${API_URL}/api/admin/stats`);
      const statsData = await statsRes.json();
      setDashboardStats(statsData.stats || {});
    } catch (error) {
      console.error("Dashboard fetch error:", error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await fetch(`${API_URL}/api/admin/orders/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      fetchDashboardData();
    } catch (error) {
      console.error("Status update error:", error);
    }
  };

  const deleteOrder = async (id) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    try {
      await fetch(`${API_URL}/api/admin/orders/${id}`, {
        method: "DELETE",
      });

      fetchDashboardData();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const stats = [
    ["Total Orders", dashboardStats.totalOrders || 0, "All orders", <FaBox />],
    [
      "Today's Orders",
      dashboardStats.todayOrders || 0,
      "Orders received today",
      <FaCalendarCheck />,
    ],
    [
      "Revenue",
      `₹${dashboardStats.revenue || 0}`,
      "Non-cancelled revenue",
      <FaRupeeSign />,
    ],
    [
      "Pending Pickups",
      dashboardStats.pendingPickups || 0,
      "Needs attention",
      <FaTruck />,
    ],
  ];

  const statusStyle = (status) => {
    if (status === "Delivered") return "success";
    if (status === "Washing") return "warning";
    if (status === "Out For Delivery") return "primary";
    if (status === "Pickup Assigned") return "info";
    if (status === "Cancelled") return "danger";
    return "secondary";
  };

  return (
    <main
      style={{
        background: theme.lightBg,
        minHeight: "100vh",
        overflowX: "hidden",
        maxWidth: "100vw",
      }}
    >
      <nav
        className="navbar navbar-expand-lg sticky-top shadow-sm"
        style={{ background: theme.white, maxWidth: "100vw" }}
      >
        <div className="container-fluid px-3 px-lg-4">
          <button
            type="button"
            className="navbar-brand fw-bold d-flex align-items-center gap-2 border-0 bg-transparent p-0"
            style={{ color: theme.navy }}
          >
            <span
              className="rounded-3 d-inline-flex align-items-center justify-content-center"
              style={{
                width: "42px",
                height: "42px",
                background: "rgba(184,154,195,0.18)",
                color: theme.lavender,
              }}
            >
              <FaTruck />
            </span>
            DHULAI BUCKET
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#adminNavbar"
            aria-controls="adminNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="adminNavbar">
            <ul className="navbar-nav mx-auto gap-lg-2 mt-3 mt-lg-0">
              {navItems.map((item, index) => (
                <li className="nav-item" key={item[0]}>
                  <button
                    type="button"
                    className="nav-link fw-bold d-flex align-items-center gap-2 border-0 bg-transparent px-2"
                    style={{
                      color: index === 0 ? theme.lavender : theme.navy,
                      borderBottom:
                        index === 0 ? `3px solid ${theme.lavender}` : "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item[1]}
                    {item[0]}
                  </button>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center gap-2 gap-lg-3 mt-3 mt-lg-0 flex-wrap">
              <div
                className="input-group d-none d-xl-flex"
                style={{ width: "250px" }}
              >
                <span className="input-group-text bg-white">
                  <FaSearch style={{ color: theme.lavender }} />
                </span>
                <input
                  className="form-control"
                  placeholder="Search orders..."
                />
              </div>

              <button
                type="button"
                className="btn btn-light rounded-circle position-relative"
              >
                <FaBell />
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                  style={{ background: theme.lavender }}
                >
                  5
                </span>
              </button>

              <div className="d-flex align-items-center gap-2">
                <FaUserCircle size={34} style={{ color: theme.lavender }} />
                <div className="d-none d-md-block">
                  <h6 className="mb-0 fw-bold" style={{ color: theme.navy }}>
                    Super Admin
                  </h6>
                  <small className="text-muted">Admin</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid px-3 px-lg-4 py-4">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <div>
            <h2 className="fw-bold mb-1" style={{ color: theme.navy }}>
              Admin Dashboard
            </h2>
            <p className="text-muted mb-0">
              Manage orders, riders, coupons and laundry operations.
            </p>
          </div>

          <button
            type="button"
            className="btn text-white rounded-pill px-4 fw-bold"
            style={{ background: theme.lavender }}
          >
            <FaPlus className="me-2" />
            Create Order
          </button>
        </div>

        <div className="row g-4 mb-4">
          {stats.map((item) => (
            <div className="col-xl-3 col-md-6" key={item[0]}>
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "60px",
                        height: "60px",
                        background: "rgba(184,154,195,0.18)",
                        color: theme.lavender,
                        fontSize: "24px",
                      }}
                    >
                      {item[3]}
                    </div>

                    <div>
                      <p className="mb-1 fw-semibold text-muted">{item[0]}</p>
                      <h3
                        className="fw-bold mb-1"
                        style={{ color: theme.navy }}
                      >
                        {item[1]}
                      </h3>
                      <small className="text-success">{item[2]}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4">
          <div className="col-xl-8">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                  <h4 className="fw-bold mb-0" style={{ color: theme.navy }}>
                    Recent Orders
                  </h4>

                  <button
                    type="button"
                    className="btn btn-light rounded-pill fw-bold"
                    style={{ color: theme.lavender }}
                    onClick={fetchDashboardData}
                  >
                    Refresh
                  </button>
                </div>

                <div
                  className="table-responsive w-100"
                  style={{ maxWidth: "100%", overflowX: "auto" }}
                >
                  <table className="table align-middle mb-0">
                    <thead>
                      <tr>
                        <th className="text-nowrap">Order ID</th>
                        <th className="text-nowrap">Customer</th>
                        <th className="text-nowrap">Service</th>
                        <th className="text-nowrap">Amount</th>
                        <th className="text-nowrap">Status</th>
                        <th className="text-end text-nowrap">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {orders.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="text-center py-4">
                            No orders found
                          </td>
                        </tr>
                      ) : (
                        orders.map((order) => (
                          <tr key={order._id}>
                            <td
                              className="fw-bold text-nowrap"
                              style={{ color: theme.lavender }}
                            >
                              {order.orderId}
                            </td>
                            <td className="text-nowrap">
                              <b>{order.customerName}</b>
                              <br />
                              <small className="text-muted">
                                {order.phone}
                              </small>
                            </td>
                            <td className="text-nowrap">{order.service}</td>
                            <td className="fw-bold text-nowrap">
                              ₹{order.totalAmount}
                            </td>
                            <td className="text-nowrap">
                              <span
                                className={`badge bg-${statusStyle(
                                  order.status,
                                )}`}
                              >
                                {order.status}
                              </span>
                            </td>
                            <td className="text-end text-nowrap">
                              <button
                                type="button"
                                className="btn btn-light btn-sm me-2"
                                title="View"
                              >
                                <FaEye style={{ color: theme.lavender }} />
                              </button>

                              <button
                                type="button"
                                className="btn btn-light btn-sm me-2"
                                title="Mark Delivered"
                                onClick={() =>
                                  updateStatus(order._id, "Delivered")
                                }
                              >
                                <FaEdit style={{ color: theme.lavender }} />
                              </button>

                              <button
                                type="button"
                                className="btn btn-light btn-sm"
                                title="Delete"
                                onClick={() => deleteOrder(order._id)}
                              >
                                <FaTrash className="text-danger" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
                  <small className="text-muted">
                    Showing {orders.length} orders
                  </small>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 mt-4">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4" style={{ color: theme.navy }}>
                  Coupon & Referral Summary
                </h4>

                <div className="row g-3">
                  {[
                    ["Active Coupons", "12", <FaTicketAlt />],
                    ["Referral Used", "148", <FaUsers />],
                    ["Discount Given", "₹12,560", <FaGift />],
                  ].map((item) => (
                    <div className="col-md-4" key={item[0]}>
                      <div
                        className="rounded-4 p-3 h-100"
                        style={{ background: "rgba(184,154,195,0.14)" }}
                      >
                        <div
                          className="mb-2"
                          style={{ color: theme.lavender, fontSize: "26px" }}
                        >
                          {item[2]}
                        </div>
                        <p className="mb-1 fw-semibold">{item[0]}</p>
                        <h3
                          className="fw-bold mb-0"
                          style={{ color: theme.navy }}
                        >
                          {item[1]}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4" style={{ color: theme.navy }}>
                  Today's Summary
                </h4>

                {[
                  ["Total Orders", dashboardStats.totalOrders || 0],
                  ["Today's Orders", dashboardStats.todayOrders || 0],
                  ["Pending Pickups", dashboardStats.pendingPickups || 0],
                  ["Revenue", `₹${dashboardStats.revenue || 0}`],
                ].map((item) => (
                  <div
                    className="d-flex justify-content-between border-bottom py-3"
                    key={item[0]}
                  >
                    <span className="fw-semibold">{item[0]}</span>
                    <b style={{ color: theme.lavender }}>{item[1]}</b>
                  </div>
                ))}
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4" style={{ color: theme.navy }}>
                  Quick Actions
                </h4>

                <div className="row g-3">
                  {quickActions.map((item) => (
                    <div className="col-6" key={item[0]}>
                      <button
                        type="button"
                        className="btn w-100 rounded-4 py-3 fw-bold"
                        style={{
                          background: "rgba(184,154,195,0.14)",
                          color: theme.navy,
                        }}
                      >
                        <span
                          className="d-block fs-4 mb-2"
                          style={{ color: theme.lavender }}
                        >
                          {item[1]}
                        </span>
                        <span className="small">{item[0]}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="card border-0 shadow-sm rounded-4 text-white"
              style={{ background: theme.navy }}
            >
              <div className="card-body p-4">
                <h4 className="fw-bold">Smart Laundry Control</h4>
                <p className="mb-4">
                  Track pickup, washing, delivery, coupons and riders from one
                  professional dashboard.
                </p>

                <button
                  type="button"
                  className="btn btn-light rounded-pill fw-bold px-4"
                >
                  View Operations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
