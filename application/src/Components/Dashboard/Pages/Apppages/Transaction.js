import React from "react";
import PageNavigation from "../../miniComponents/PageNavigation";

const Transaction = () => {
  return (
    <div className=" pageContainer">
      <PageNavigation
        pageBtn={"Create Transaction"}
        pageTitle={"Transactions"}
      />
    </div>
  );
};

export default Transaction;
