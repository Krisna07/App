import React, { useState, useEffect } from "react";
import axios from "axios";
import PageNavigation from "../../miniComponents/PageNavigation";

const Messages = () => {
  return (
    <div className=" pageContainer">
      <PageNavigation pageBtn={"Write Message"} pageTitle={"Messages"} />
    </div>
  );
};

export default Messages;
