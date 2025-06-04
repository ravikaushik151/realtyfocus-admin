import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../auth/auth";
import axios from "axios";

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        f_name: user.f_name || "",
        l_name: user.l_name || "",
        email: user.email || "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:4000/api/profile/${user.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      // Update user and token in context
      updateUser({ ...res.data.user, token: res.data.token });
      alert("Profile updated successfully");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message); // Show backend message
      } else {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-10 bg-light">
            <div className="main px-3 my-5">
              <p className="fs-3 fw-semibold">Profile</p>
              <div className="bg-white p-4 rounded shadow-sm">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control" name="f_name" value={formData.f_name} onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-control" name="l_name" value={formData.l_name} onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="col-12 mt-4 mb-2">
                      <h6>Password Change</h6>
                    </div>
                    <div className="col-md-4 mb-3">
                      <input type="password" className="form-control" placeholder="Current Password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} />
                    </div>
                    <div className="col-md-4 mb-3">
                      <input type="password" className="form-control" placeholder="New Password" name="newPassword" value={formData.newPassword} onChange={handleChange} />
                    </div>
                    <div className="col-md-4 mb-3">
                      <input type="password" className="form-control" placeholder="Confirm New Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    </div>

                    <div className="form-group d-inline text-center mt-3 col-sm-12 text-md-start">
                      <button type="submit" className="btn btn-sm bg-main text-light">Save Changes</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
