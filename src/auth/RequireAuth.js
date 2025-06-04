import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";
import { hasPermission } from "../utils/permissions";

const RequireAuth = ({ children, page }) => {
  const { user } = useAuth();
  const location = useLocation();

  const isAuthenticated = !!user;
  const isAuthorized = isAuthenticated && (!page || hasPermission(user, page));

  // Show alert once when unauthorized
  useEffect(() => {
    if (isAuthenticated && !isAuthorized) {
      alert("You are not allowed to access this page.");
    }
  }, [isAuthenticated, isAuthorized]);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isAuthorized) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RequireAuth;
