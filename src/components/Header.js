import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [navbarBg] = useState("bg-white");
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
    //window.location.href = "/login";
  };

  return (
    <>
      <header className={`p-3 mb-3 ${navbarBg}`}>
        <div className="container-fluid">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none">
              <img src="/assets/images/logo.webp" className="w-75 img-fluid" alt="Logo" />
            </Link>

            <ul className="nav col-12 col-lg-auto mx-lg-auto mb-2 justify-content-end mb-md-0">
              {/* Optional navigation items here */}
            </ul>

            <div className="dropdown text-end">
              <Link
                to="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <strong className="px-2">
                  {user?.f_name || "User"}
                </strong>
              </Link>
              <ul className="dropdown-menu text-small">
                <li>
                  <Link className="dropdown-item" to="/Profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/access-control">
                    Settings
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;