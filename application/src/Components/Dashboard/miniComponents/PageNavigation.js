import React from "react";

const PageNavigation = ({ pageTitle, pageBtn }) => {
  return (
    <div className="pageNav section">
      <div className="sectionItems">
        <div className="pageTitle">
          <span>Overview</span>
          <h2>{pageTitle}</h2>
        </div>
        <div className="pageAction">
          <button className="DashBtn">{pageBtn}</button>
        </div>
      </div>
    </div>
  );
};

export default PageNavigation;
