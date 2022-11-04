import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Actions = ({ items }) => {
  const [action, setAction] = useState();
  return (
    <div className="goalcomp">
      <div className="goalsDetails">
        <span>{items.title}</span>
        <span>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "AUD",
          }).format(items.amount)}
        </span>
      </div>
      <div className="goalsdue">
        <span>{items.due}</span>
        <span
          onClick={() => {
            setAction(!action);
          }}
        >
          <BsThreeDotsVertical />
        </span>
      </div>
      <div
        className="goalActions"
        style={{ display: `${action ? "flex" : "none"}` }}
      >
        <span>Edit</span>
        <span>Complete</span>
        <span>Remove</span>
      </div>
    </div>
  );
};

export default Actions;
