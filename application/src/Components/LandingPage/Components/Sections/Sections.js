import React from "react";
import "./Sections.css";
import { FaArrowCircleRight, FaBeer, FaPlay } from "react-icons/fa";
const Sections = () => {
  return (
    <div className="sectionContainer">
      <div className="sectionLeft">
        <h1>Know your pitch </h1>
        <p>
          Redefine your knowledge of sports. Make friends and support your
          favourite player and club.
        </p>
        <button className="pageBtn">
          Sign Up <FaPlay />{" "}
        </button>
      </div>
    </div>
  );
};

export default Sections;
