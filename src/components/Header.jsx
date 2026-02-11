import React from "react";
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Header = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { cart } = useCart();
  // Don't show cart if not logged in
  if (!user) return null;
  const cartCount = cart?.items.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <header className="bg-white bg-opacity-90 backdrop-blur-sm shadow-sm sticky-top">
      <Navbar expand="lg" className="py-3">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center fs-4 fw-bold text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="text-success me-2">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              <path d="M16.24 7.76C15.07 6.59 13.53 6 12 6s-3.07.59-4.24 1.76c-2.34 2.34-2.34 6.14 0 8.48.62.62 1.39 1.04 2.24 1.26"></path>
              <path d="M8.57 16.24c.62.62 1.39 1.04 2.24 1.26C12.69 17.77 14.37 18 16 18c.85 0 1.69-.17 2.43-.5.74-.33 1.42-.77 2.01-1.31"></path>
            </svg>
            <span className="text-success">Organic</span><span className="text-secondary">Roots</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            {/* Navigation Links */}
            <Nav className="mx-auto fw-semibold fs-6">
              <Nav.Link as={Link} to="/home" className={location.pathname === "/" ? "text-success" : "text-dark"}>Home</Nav.Link>
              <Nav.Link as={Link} to="/learn" className={location.pathname === "/learn" ? "text-success" : "text-dark"}>Learn</Nav.Link>
              <Nav.Link as={Link} to="/marketplace" className={location.pathname.includes("/marketplace") ? "text-success" : "text-dark"}>Marketplace</Nav.Link>
              <Nav.Link as={Link} to="/schemes" className={location.pathname === "/schemes" ? "text-success" : "text-dark"}>Govt. Schemes</Nav.Link>
              <Nav.Link as={Link} to="/farmers" className={location.pathname === "/farmers" ? "text-success" : "text-dark"}>For Farmers</Nav.Link>
            </Nav>

            {/* Profile & Cart */}
            <div className="d-flex align-items-center gap-3">
              {/* Profile / Login */}
              {user ? (
                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    className="d-flex align-items-center border rounded-pill px-2 py-1 shadow-sm"
                    style={{ minWidth: "150px", gap: "8px" }}
                  >
                    <span className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "35px", height: "35px", fontSize: "18px" }}>
                      {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                    </span>
                    <span className="text-dark fw-medium text-truncate" style={{ maxWidth: "90px" }}>
                      {user.name || user.email}
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={Link}
                      to={
                        user.role === "buyer"
                          ? "/buyer-dashboard"
                          : user.role === "seller"
                            ? "/farmer-dashboard"
                            : "/admin-dashboard"
                      }
                    >
                      Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Link to="/login" className="btn btn-link text-secondary text-decoration-none">Log In</Link>
                  <Link to="/signup" className="btn btn-success rounded-pill px-4">Sign Up</Link>
                </>
              )}

              {/* Cart - show only for buyers */}
              {user.role === "buyer" && (
                <Button as={Link} to="/cart" variant="outline-success" className="position-relative">
                  <i className="bi bi-cart fs-5"></i>
                  {cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      {cartCount}
                    </span>
                  )}
                </Button>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
