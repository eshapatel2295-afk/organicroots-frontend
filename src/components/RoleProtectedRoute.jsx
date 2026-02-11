import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RoleProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" replace />;

  if (user.role !== role) {
    return <Navigate to={`/${user.role}-dashboard`} replace />;
  }

  return children;
};

export default RoleProtectedRoute;
