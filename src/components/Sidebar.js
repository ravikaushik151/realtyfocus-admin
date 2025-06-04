/*

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [allowedPages, setAllowedPages] = useState([]);

  const menuItems = [
    { path: "/", label: "Dashboard", icon: "dashboard.png" },
    { path: "/microsite", label: "Microsite", icon: "resume.png" },
    { path: "/microsite-meta-tag", label: "Microsite Meta Tags", icon: "resume.png" },
    { path: "/microsite-details", label: "Microsite Details", icon: "product.png" },
    { path: "/microsite-price", label: "Microsite Price", icon: "brand.png" },
    { path: "/floor-plan", label: "Floor Plan", icon: "compni.png" },
    { path: "/blogs", label: "Blogs", icon: "blog.png" },
    { path: "/builder", label: "Builder", icon: "assort.png" },
    { path: "/amenities", label: "Amenities", icon: "assort.png" },
    { path: "/specifications", label: "Specifications", icon: "assort.png" },
    { path: "/specifications-detail", label: "Specifications Detail", icon: "assort.png" },
    { path: "/bank-approval", label: "Bank Approval", icon: "assort.png" },
    { path: "/legal-approval", label: "Legal Approval", icon: "assort.png" },
    { path: "/property-status", label: "Property Status", icon: "assort.png" },
    { path: "/property-type", label: "Property Type", icon: "assort.png" },
    { path: "/access-control", label: "Access Control", icon: "setting.png" }, // Superadmin only
    { path: "/user", label: "User", icon: "setting.png" }, // Superadmin only
  ];

  useEffect(() => {
    if (user?.role === "subadmin") {
      axios
        .get(`http://localhost:4000/api/access/users/${user.id}`)
        .then((res) => {
          const pages = res.data.filter(p => p.type === "access").map(p => p.page);
          setAllowedPages(pages);
        })
        .catch((err) => {
          console.error("Failed to load permissions", err);
        });
    }
  }, [user]);

  const logoutFunction = () => {
    logout();
    navigate("/login");
    //window.location.href = "/login";
  };

  // Filter menu items based on role/permissions
  const visibleItems =
    user?.role === "superadmin"
      ? menuItems
      : menuItems.filter((item) => allowedPages.includes(item.path));

  return (
    <div className="col-md-2 mt-3">
      <ul className="nav flex-column sid-nav">
        {visibleItems.map((item) => (
          <li key={item.path} className="nav-item">
            <Link
              className={`nav-link text-decoration-none fw-semibold text-secondary fs-6 mb-2 ${location.pathname.startsWith(item.path) ? "active" : ""}`}
              to={item.path}
            >
              <img src={`assets/images/${item.icon}`} className="mx-3 w-icon" alt={item.label} />
              {item.label}
            </Link>
          </li>
        ))}
        <li className="nav-item text-center ps-3">
          <button
            className="nav-link btn btn-sm my-3 text-light bg-main rounded-pill text-decoration-none fw-semibold fs-6 mb-2"
            onClick={logoutFunction}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
*/


import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [allowedPages, setAllowedPages] = useState([]);
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const groupedMenu = {
    Dashboard: [
      { path: "/", label: "Dashboard", icon: "dashboard.png" }
    ],
    Microsite: [
      { path: "/microsite", label: "Microsite", icon: "resume.png" },
      { path: "/microsite-meta-tag", label: "Microsite Meta Tags", icon: "resume.png" },
      { path: "/microsite-details", label: "Microsite Details", icon: "product.png" },
      { path: "/microsite-price", label: "Microsite Price", icon: "brand.png" },
      { path: "/floor-plan", label: "Floor Plan", icon: "compni.png" },
      { path: "/blogs", label: "Blogs", icon: "blog.png" },
      { path: "/builder", label: "Builder", icon: "assort.png" },
    ],
    Specifications: [
      { path: "/amenities", label: "Amenities", icon: "assort.png" },
      { path: "/specifications", label: "Specifications", icon: "assort.png" },
      { path: "/specifications-detail", label: "Specifications Detail", icon: "assort.png" },
    ],
    Approval: [
      { path: "/bank-approval", label: "Bank Approval", icon: "assort.png" },
      { path: "/legal-approval", label: "Legal Approval", icon: "assort.png" },
    ],
    Property: [
      { path: "/property-status", label: "Property Status", icon: "assort.png" },
      { path: "/property-type", label: "Property Type", icon: "assort.png" },
    ],
    Settings: [
      { path: "/access-control", label: "Access Control", icon: "setting.png" },
      { path: "/user", label: "User", icon: "setting.png" },
    ]
  };

  useEffect(() => {
    if (user?.role === "subadmin") {
      axios
        .get(`http://localhost:4000/api/access/users/${user.id}`)
        .then((res) => {
          const pages = res.data.filter((p) => p.type === "access").map((p) => p.page);
          setAllowedPages(pages);
        })
        .catch((err) => {
          console.error("Failed to load permissions", err);
        });
    }
  }, [user]);

  const logoutFunction = () => {
    logout();
    navigate("/login");
  };

  const isVisible = (item) => {
    return user?.role === "superadmin" || allowedPages.includes(item.path);
  };

  return (
    <div className="col-md-2 mt-3">
      <ul className="nav flex-column sid-nav">
        {Object.entries(groupedMenu).map(([section, items]) => {
          const visibleInSection = items.filter(isVisible);
          if (visibleInSection.length === 0) return null;

          return (
            <li key={section} className="nav-item">
              <div
                className="nav-link text-uppercase fw-bold text-dark"
                onClick={() => toggleSection(section)}
                style={{ cursor: "pointer" }}
                aria-expanded={!!openSections[section]}
                aria-controls={`${section}-submenu`}
              >
                {section}
              </div>
              {openSections[section] && (
                <div id={`${section}-submenu`} role="region" aria-label={section}>
                  {visibleInSection.map((item) => (
                    <Link
                      key={item.path}
                      className={`nav-link text-decoration-none fw-semibold text-secondary fs-6 mb-2 ps-4 ${location.pathname.startsWith(item.path) ? "active" : ""
                        }`}
                      to={item.path}
                    >
                      <img
                        src={`/assets/images/${item.icon}`}
                        className="mx-2 w-icon"
                        alt={item.label}
                      />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          );
        })}

        <li className="nav-item text-center ps-3">
          <button
            className="nav-link btn btn-sm my-3 text-light bg-main rounded-pill text-decoration-none fw-semibold fs-6 mb-2"
            onClick={logoutFunction}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
