import React from "react";

const Datacards = ({ items, newSaving, goal, key, prevSaving }) => {
  return (
    <>
      <div className="dataComp" key={key}>
        <div className="compItems">
          <span className="compTitle">{items.title.toLocaleUpperCase()}</span>
          <div className="compvalue">
            {items.des}
            {items.title == "saving" ? (
              <span>
                +{" "}
                {parseFloat(((newSaving - prevSaving) / goal) * 100).toFixed(2)}{" "}
                %
              </span>
            ) : (
              ""
            )}

            {items.title == "remaining" ? (
              <span>
                -{" "}
                {parseFloat(((newSaving - prevSaving) / goal) * 100).toFixed(2)}{" "}
                %
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="compicons">{items.icon}</div>
      </div>
    </>
  );
};

export default Datacards;
