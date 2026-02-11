import React, { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Menu, X } from "react-feather";
import {
  Home,
  PlusCircle,
  Boxes,
  Receipt,
  Wallet,
  User,
  Bell,
  LogOut,
} from "lucide-react";


const FarmerDashboard = () => {
  const [open, setOpen] = useState(false); // mobile sidebar
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menu = [
  { name: "Dashboard", icon: <Home />, path: "/farmer-dashboard" },
  { name: "Add Product", icon: <PlusCircle />, path: "/farmer-dashboard/add-product" },
  { name: "Manage Products", icon: <Boxes />, path: "/farmer-dashboard/products" },
  { name: "Orders", icon: <Receipt />, path: "/farmer-dashboard/orders" },
  { name: "Earnings", icon: <Wallet />, path: "/farmer-dashboard/earnings" },
  { name: "Profile", icon: <User />, path: "/farmer-dashboard/profile" },
];

  return (
    <div style={{ minHeight: "100vh", display: "flex", background: "#f5faf5" }}>
      {/* Desktop Sidebar */}
      <aside
        className="d-none d-md-flex flex-column bg-white border-end p-3"
        style={{
          width: 260,
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          overflowY: "auto",
          zIndex: 1000,
        }}
      >
        <h4 className="fw-bold mb-4 text-success">Farmer Panel</h4>
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              "d-flex align-items-center gap-2 p-2 rounded mb-2 text-decoration-none " +
              (location.pathname === item.path ? "bg-success text-white" : "text-dark")
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}

        <div className="mt-auto">
          <div className="small text-muted mb-1">Logged in as</div>
          <div className="fw-semibold">{user?.name}</div>
          <button className="btn btn-danger btn-sm w-100 mt-3" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-grow-1 d-flex flex-column" style={{ marginLeft: 260 }}>
        {/* Topbar */}
        <nav className="navbar navbar-light bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            {/* Mobile menu button */}
            <button className="btn btn-outline-secondary d-md-none" onClick={() => setOpen(true)}>
              <Menu />
            </button>
            <span className="navbar-brand mb-0 h4 fw-bold">Welcome, {user?.name || "Farmer"}</span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-outline-secondary rounded-circle p-2 d-none d-md-flex">
              <Bell size={20} />
            </button>
            
          </div>
        </nav>

        {/* Mobile Sidebar */}
        {open && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{ background: "rgba(0,0,0,0.4)", zIndex: 2000 }}
            onClick={() => setOpen(false)}
          >
            <aside
              className="bg-white h-100 p-3"
              style={{ width: 260 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="text-success m-0">Farmer Panel</h5>
                <button className="btn btn-light btn-sm" onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>

              {menu.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    "d-flex align-items-center gap-2 p-2 rounded mb-2 text-decoration-none " +
                    (location.pathname === item.path ? "bg-success text-white" : "text-dark")
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              ))}

              <div className="mt-4">
                <div className="small text-muted mb-1">Logged in as</div>
                <div className="fw-semibold">{user?.name}</div>
                <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </aside>
          </div>
        )}

        {/* Page content */}
        <main className="flex-grow-1 p-4 overflow-auto bg-light">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default FarmerDashboard;
