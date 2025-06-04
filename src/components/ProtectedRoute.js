// src/components/ProtectedRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/auth";
import { message } from "antd";

const ProtectedRoute = ({ children }) => {
    const { user, permissions } = useAuth();
    const location = useLocation();

    const currentPath = location.pathname;

    const hasAccess =
        user?.role === "superadmin" ||
        permissions.some((perm) => perm.page === currentPath && perm.type === "access");

    if (!hasAccess) {
        message.error("You are not allowed to access this page.");
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
