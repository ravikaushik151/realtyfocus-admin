import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios"; // updated

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    if (user?.role === "subadmin") {
      api.get(`/access/users/${user.id}`)
        .then(res => setPermissions(res.data))
        .catch(() => setPermissions([]));
    }
  }, [user]);

  const login = (userData) => {
    window.location.reload(); // force clear everything
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setPermissions([]);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, permissions, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
