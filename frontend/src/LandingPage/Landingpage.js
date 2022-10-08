import React from "react";
import LandingLayout from "./Components/LandingLayout";
import Navbar from "./Components/Sections/Navigation/Navbar";
import "./LandingPage.css";

const Landingpage = () => {
  return (
    <div className="LandingPage">
      <Navbar />
      <div className="brandTheme"></div>
      <LandingLayout />
    </div>
  );
};

export default Landingpage;
