import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Transactions = ({ transactionInfo }) => {
  const [action, setAction] = useState();
  console.log(transactionInfo);
  return (
    <div className="transactions ">
      <h4>Transactions</h4>

      <div className="transactionDetails hideScrollbar">
        {transactionInfo.map((items, x) => (
          <div className="transactioncard" key={x}>
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
        ))}
      </div>
    </div>
  );
};

export default Transactions;
