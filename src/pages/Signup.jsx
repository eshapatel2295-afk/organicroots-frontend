

// ===================== Signup.jsx =====================
import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();

  const isSellerMode = new URLSearchParams(location.search).get("seller") === "true";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: isSellerMode ? "farmer" : "buyer",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      await login(formData.email, formData.password);

      if (data.user.role === "buyer") navigate("/buyer-dashboard");
      else if (data.user.role === "farmer") navigate("/farmer-dashboard");
      else navigate("/admin-dashboard");
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      alert(message);
    }
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #eafbf0 0%, #d9f6df 40%, #c8f0d2 100%)",
        padding: "20px",
        fontFamily: "Poppins, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        className="auth-wrap position-relative w-100"
        style={{
          maxWidth: "900px",
          minHeight: "500px",  // dynamic height
          height: "auto",
          borderRadius: "22px",
          overflowY: "auto",
          boxShadow: "0 16px 40px rgba(14, 50, 30, 0.12)",
          border: "6px solid rgba(255, 255, 255, 0.9)",
          background: "#fff",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {/* LEFT SIDE IMAGE */}
        <div
          className="left"
          style={{
            position: "relative",
            backgroundImage: "url('/mnt/data/6cd25b1c-1a77-40e2-b728-2c829b1c66f9.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(16, 72, 40, 0.06), rgba(255, 255, 255, 0.02))",
              mixBlendMode: "multiply",
            }}
          />

          <div
            className="left-inner"
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              maxWidth: "280px",
              padding: "10px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(3px)",
              boxShadow: "0 8px 20px rgba(10, 40, 20, 0.06)",
            }}
          >
            <div
              className="brand-title"
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#154737",
                marginBottom: "6px",
              }}
            >
              ORGANIC ROOTS
            </div>

            <div
              className="brand-sub"
              style={{
                fontSize: "0.85rem",
                color: "rgba(16, 54, 36, 0.9)",
                marginBottom: "10px",
              }}
            >
              Start your journey with pure organic produce.
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div
          className="right"
          style={{
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="form-card"
            style={{
              width: "100%",
              maxWidth: "320px",
              padding: "15px 12px",
              borderRadius: "14px",
              background: "linear-gradient(180deg, #ffffff, #fbfff9)",
              boxShadow: "0 10px 25px rgba(12, 50, 30, 0.06)",
            }}
          >
            <h3 style={{ color: "#1e6b48", fontWeight: 700, marginBottom: "4px" }}>
              Create Account
            </h3>

            <p style={{ marginBottom: "14px", color: "#527b62" }}>
              Join Organic Roots today.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ borderRadius: "8px", padding: "8px 10px" }}
                  name="name"
                  placeholder="Enter full name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-2">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  style={{ borderRadius: "8px", padding: "8px 10px" }}
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  style={{ borderRadius: "8px", padding: "8px 10px" }}
                  name="password"
                  placeholder="Create password"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Conditional Role Selector */}
              {!isSellerMode && (
                <div className="mb-3">
                  <label className="form-label fw-semibold">Register As</label>
                  <select
                    name="role"
                    className="form-control"
                    style={{ borderRadius: "8px", padding: "8px 10px" }}
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="buyer">Buyer</option>
                    <option value="farmer">Seller (Farmer)</option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "10px",
                  fontWeight: 700,
                  color: "#07321a",
                  border: "none",
                  background:
                    "linear-gradient(90deg, #b8ffd0 0%, #57a892 60%, #2e7d32 100%)",
                  marginBottom: "8px",
                }}
              >
                Register
              </button>

              <div
                className="form-foot"
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                  fontSize: "0.9rem",
                  color: "#356646",
                }}
              >
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{
                    color: "#154737",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
