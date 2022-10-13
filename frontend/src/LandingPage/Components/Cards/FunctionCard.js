import React from "react";
import "./FunctionCard.css";

const FunctionCard = ({ items, flexStyle, textalign }) => {
  return (
    <div
      className="card-1"
      style={{
        background: `${items.background ? items.background : ""}`,
        alignItems: `${flexStyle ? flexStyle : ""}`,
        textAlign: `${textalign ? textalign : ""}`,
      }}
    >
      <div className="cardIcon textGradient">{items.icons}</div>
      <div className="cardHeading ">{items.title}</div>
      <div className="cardDes">{items.des}</div>
    </div>
  );
};

export default FunctionCard;
