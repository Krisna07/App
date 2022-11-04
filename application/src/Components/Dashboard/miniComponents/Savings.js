import React from "react";

const Savings = ({ savings, progress }) => {
  const team = [...Array(parseInt(savings.team)).keys()];
  let background = (items) => `var(--color${team.indexOf(items) + 1})`;

  return (
    <tr>
      <td>{savings.goal}</td>
      <td>{savings.amount}</td>
      <td>
        <div className="progressCircle">
          <div className="fixedincenter">
            {parseFloat((savings.progress / savings.amount) * 100).toFixed()}%
          </div>
        </div>
      </td>
      <td>{savings.exitDate}</td>
      <td className="teamContainer">
        {team.map((items) => (
          <>
            <div
              className="teamImage"
              style={{
                left: `-${team.indexOf(items) * 10}%`,
                background: background(items),
              }}
            ></div>
          </>
        ))}
      </td>
    </tr>
  );
};

export default Savings;
