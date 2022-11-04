import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Transactions = () => {
  const [action, setAction] = useState();
  return (
    <div className="transactions">
      <h4>Transactions</h4>
      <div className="transactioncard">
        <div className="teamImage"></div>
        <div transactionDeatils>
          <div className="sender">Sender Name</div>
          <div className="sendDate">22/7/2222</div>
        </div>
        <BsThreeDotsVertical
          onClick={() => {
            setAction(!action);
          }}
        />
        <div
          className="goalActions"
          style={{ display: `${action ? "flex" : "none"}` }}
        >
          <span>Edit</span>
          <span>Complete</span>
          <span>Remove</span>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
