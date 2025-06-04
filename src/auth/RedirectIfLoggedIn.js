// auth/RedirectIfLoggedIn.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

const RedirectIfLoggedIn = ({ children }) => {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default RedirectIfLoggedIn;
