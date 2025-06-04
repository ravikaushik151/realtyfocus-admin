import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  const backgroundImageStyle = {
    background: 'url("assets/images/about-bg.png")',
    backgroundSize: 'cover',
    height: '100 vh'
  };
  document.title = "Realty Focus";
  document.getElementsByTagName("META")[2].content = "Realty Focus";
  return (
    <>
      <Header />




      <Footer />
    </>
  );
};

export default Profile;
