
// ===================== Login.jsx =====================
import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const loggedInUser = await login(email, password);
      const userRole = loggedInUser.role;

      if (!userRole) {
        throw new Error("Role missing from server response");
      }

      if (location.state?.sellerMode === true) {
        if (userRole === "farmer") navigate("/farmer-dashboard");
        else alert("Please login with a Farmer account!");
        return;
      }

      if (userRole === "buyer") navigate("/buyer-dashboard");
      else if (userRole === "farmer") navigate("/farmer-dashboard");
      else if (userRole === "admin") navigate("/admin-dashboard");
      else navigate("/");
    } catch (err) {
      setError(err.message || "Invalid Credentials");
    }

    setLoading(false);
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #eafbf0 0%, #d9f6df 40%, #c8f0d2 100%)",
        padding: "30px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        className="auth-wrap position-relative w-100"
        style={{
          maxWidth: "1120px",
          borderRadius: "26px",
          overflow: "hidden",
          boxShadow: "0 18px 45px rgba(14, 50, 30, 0.12)",
          border: "8px solid rgba(255, 255, 255, 0.9)",
          background: "#fff",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {/* LEFT SIDE */}
        <div
          className="left"
          style={{
            position: "relative",
            backgroundImage:
              "url('/mnt/data/6cd25b1c-1a77-40e2-b728-2c829b1c66f9.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            padding: "48px 36px",
            color: "#062d17",
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
              maxWidth: "340px",
              padding: "18px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(3px)",
              boxShadow: "0 10px 30px rgba(10, 40, 20, 0.08)",
            }}
          >
            <div
              className="brand-title"
              style={{
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "2px",
                color: "#154737",
                marginBottom: "8px",
              }}
            >
              ORGANIC ROOTS
            </div>

            <div
              className="brand-sub"
              style={{
                fontSize: "0.95rem",
                color: "rgba(16, 54, 36, 0.9)",
                marginBottom: "14px",
              }}
            >
              Growing a healthier tomorrow with pure organic farming.
              Discover, learn, and explore nature with us.
            </div>
          </div>

          {/* CURVED SPLIT */}
          <div
            className="split-curve"
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-40px",
              top: 0,
              bottom: 0,
              width: "100px",
              pointerEvents: "none",
              zIndex: 3,
            }}
          >
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: "100%", width: "100%" }}
            >
              <path
                d="M0,0 C40,25 60,75 100,100 L100,0 Z"
                fill="#ffffff"
              ></path>
            </svg>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="right"
          style={{
            padding: "44px 48px",
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(247, 252, 247, 0.98))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="form-card"
            style={{
              width: "100%",
              maxWidth: "420px",
              padding: "24px 18px",
              borderRadius: "16px",
              background: "linear-gradient(180deg, #ffffff, #fbfff9)",
              boxShadow: "0 14px 30px rgba(12, 50, 30, 0.06)",
            }}
          >
            <h3
              style={{
                color: "#1e6b48",
                fontWeight: 700,
                marginBottom: "6px",
              }}
            >
              Welcome Back
            </h3>

            <p
              className="small-muted"
              style={{ marginBottom: "18px", color: "#527b62" }}
            >
              Login to continue your Organic Roots dashboard
            </p>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    borderRadius: "12px",
                    padding: "12px 14px",
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    borderRadius: "12px",
                    padding: "12px 14px",
                  }}
                />
              </div>

              <div className="d-flex justify-content-between mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label
                    className="form-check-label"
                    style={{ color: "#2f6d50" }}
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  to="/forgot-password"
                  style={{
                    color: "#1e6b48",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="btn-agri"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  color: "#07321a",
                  border: "none",
                  background:
                    "linear-gradient(90deg, #b8ffd0 0%, #57a892 60%, #2e7d32 100%)",
                  boxShadow: "0 10px 30px rgba(46,125,50,0.12)",
                }}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <div
                className="form-foot"
                style={{
                  marginTop: "14px",
                  textAlign: "center",
                  fontSize: "0.95rem",
                  color: "#356646",
                }}
              >
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  style={{
                    color: "#154737",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
