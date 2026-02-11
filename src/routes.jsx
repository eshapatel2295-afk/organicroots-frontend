import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// Pages
import Home from "./pages/Home";
import LearnPage from "./pages/Learn/LearnPage";
import LearnDetailsPage from "./pages/Learn/LearnDetailsPage";
import MarketplacePage from "./pages/MarketplacePage";
import ProductDetail from "./pages/ProductDetail";
import Schemes from "./pages/Schemes";
import Farmers from "./pages/ForFarmersPage";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

// Dashboards
import BuyerDashboard from "./pages/Dashboards/BuyerDashboard";
import FarmerDashboard from "./pages/Dashboards/FarmerDashboard";
import AdminDashboard from "./pages/Dashboards/AdminDashboard";

import FarmerHome from "./pages/Dashboards/FarmerHome";
import AddProduct from "./pages/Dashboards/AddProduct";
import ManageProducts from "./pages/Dashboards/ManageProducts";
import Orders from "./pages/Dashboards/Orders";
import Earnings from "./pages/Dashboards/Earnings";
import Profile from "./pages/Dashboards/Profile";
import EditProduct from "./pages/Dashboards/EditProduct";

// Role Protected Route
import RoleProtectedRoute from "./components/RoleProtectedRoute";

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Optional loading screen
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to={`/${user.role}-dashboard`} />}
      />
      <Route
        path="/signup"
        element={!user ? <Signup /> : <Navigate to={`/${user.role}-dashboard`} />}
      />

      {/* Protected Routes: Redirect to login if not logged in */}
      <Route
        path="/"
        element={user ? <Navigate to="/login" /> : <Navigate to="/login" />}
      />
      <Route
        path="/home"
        element={user ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/learn"
        element={user ? <LearnPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/learn/:id"
        element={user ? <LearnDetailsPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/marketplace"
        element={user ? <MarketplacePage /> : <Navigate to="/login" />}
      />
      <Route
        path="/marketplace/:id"
        element={user ? <ProductDetail /> : <Navigate to="/login" />}
      />
      <Route
        path="/cart"
        element={user ? <CartPage /> : <Navigate to="/login" />}
      />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success/:id" element={<OrderSuccess />} />
      <Route
        path="/schemes"
        element={user ? <Schemes /> : <Navigate to="/login" />}
      />
      <Route
        path="/farmers"
        element={user ? <Farmers /> : <Navigate to="/login" />}
      />
      <Route
        path="/about"
        element={user ? <About /> : <Navigate to="/login" />}
      />
      <Route
        path="/contact"
        element={user ? <Contact /> : <Navigate to="/login" />}
      />

      {/* Dashboards (Role Protected) */}
      <Route
        path="/buyer-dashboard"
        element={
          <RoleProtectedRoute role="buyer">
            <BuyerDashboard />
          </RoleProtectedRoute>
        }
      />
      <Route
        path="/farmer-dashboard/*"
        element={
          <RoleProtectedRoute role="farmer">
            <FarmerDashboard />
          </RoleProtectedRoute>
        }
      >
        <Route index element={<FarmerHome />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="products" element={<ManageProducts />} />
        <Route path="products/edit/:id" element={<EditProduct />} />
        <Route path="orders" element={<Orders />} />
        <Route path="earnings" element={<Earnings />} />
        <Route path="profile" element={<Profile />} />

      </Route>
      <Route
        path="/admin-dashboard"
        element={
          <RoleProtectedRoute role="admin">
            <AdminDashboard />
          </RoleProtectedRoute>
        }
      />

      {/* Catch-all: redirect unknown routes */}
      <Route path="*" element={<Navigate to={user ? `/${user.role}-dashboard` : "/login"} />} />
    </Routes>
  );
};

export default AppRoutes;