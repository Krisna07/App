import React, { useState, useEffect } from "react";
import { FaBullseye, FaCalendarAlt, FaChartLine, FaSave } from "react-icons/fa";
import "./Dashhome.scss";
import { LineChart, PieChart } from "react-chartkick";
import "chartkick/chart.js";

const DashHome = () => {
  const prevSaving = 40000;
  const newSaving = () => prevSaving + 4000;
  console.log(newSaving());
  const goal = "100000";
  const remaining = goal - prevSaving;
  const pageValue = [
    {
      title: "Goal",
      des: Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "AUD",
      }).format(goal),
      icon: <FaBullseye />,
    },
    {
      title: "saving",
      des: Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "AUD",
      }).format(newSaving()),
      icon: <FaSave />,
      date: Date,
    },
    {
      title: "remaining",
      des: Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "AUD",
      }).format(goal - newSaving()),
      icon: <FaChartLine />,
    },
    {
      title: "Exit date",
      des: "2022/08/22",
      icon: <FaCalendarAlt />,
    },
  ];
  return (
    <div>
      <div className="pageNav">
        <div className="pageTitle">
          <span>Overview</span>
          <h2>Dashboard</h2>
        </div>
        <div className="pageAction">
          <button className="DashBtn">Create Goal</button>
        </div>
      </div>
      <div className="pageValues">
        {pageValue.map((items, x) => (
          <div className="dataComp" key={x}>
            <div className="compItems">
              <span className="compTitle">
                {items.title.toLocaleUpperCase()}
              </span>
              <div className="compvalue">
                {items.des}
                {items.title == "saving" ? (
                  <span>
                    +{" "}
                    {parseFloat(
                      ((newSaving() - prevSaving) / goal) * 100
                    ).toFixed(2)}{" "}
                    %
                  </span>
                ) : (
                  ""
                )}

                {items.title == "remaining" ? (
                  <span>
                    -{" "}
                    {parseFloat(
                      ((newSaving() - prevSaving) / goal) * 100
                    ).toFixed(2)}{" "}
                    %
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="compicons">{items.icon}</div>
          </div>
        ))}
      </div>
      <div className="barPage">
        <div className="linearFlow">
          <h2>Monthly Savings</h2>
          <LineChart
            width="100%"
            height="20rem"
            data={{
              "2020-05-13": 20000,
              "2021-05-14": 32000,
              "2021-09-14": 80000,
              "2022-07-14": 90000,
            }}
          />
        </div>
        <div className="piesavings">
          <h2>Overall Savings</h2>
          <PieChart
            width="40%"
            height="20rem"
            data={{
              "2020-05-13": 20000,
              "2021-05-14": 32000,
              "2021-09-14": 80000,
              "2022-07-14": 90000,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashHome;
