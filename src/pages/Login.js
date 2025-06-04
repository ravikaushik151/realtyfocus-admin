import React from "react";
import LoginModal from "../components/LoginModal";
import logoImage from "../constant/images/logo.png";

const Profile = () => {
  document.title = "Realty Focus";
  document.getElementsByTagName("META")[2].content = "Realty Focus";

  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row d-flex align-items-center justify-content-center vh-100 background-color">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-8 text-center">
              <img
                src={logoImage}
                alt="Logo"
                style={{ width: "60%", height: "auto" }}
              />
            </div>
            <div className="col-md-4 p-5 bg-white vh-100 text-center">
              <LoginModal onClose={() => { }} visible={true} />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;