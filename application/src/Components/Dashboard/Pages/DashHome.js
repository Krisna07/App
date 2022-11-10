import React, { useState, useEffect } from "react";
import {
  FaBullseye,
  FaCalendarAlt,
  FaChartLine,
  FaSave,
  FaSort,
} from "react-icons/fa";

import { BsThreeDotsVertical } from "react-icons/bs";
import "./Dashhome.scss";
import { BarChart, LineChart, PieChart } from "react-chartkick";
import "chartkick/chart.js";
import Actions from "../miniComponents/Actions";
import Datacards from "../miniComponents/Datacards";
import Savings from "../miniComponents/Savings";
import Transactions from "../miniComponents/Transactions";
import moment from "moment";
import { random } from "gsap";
import PageNavigation from "../miniComponents/PageNavigation";

const DashHome = () => {
  const prevSaving = 40000;
  const newSaving = prevSaving + 4000;

  const goal = "100000";
  const remaining = goal - prevSaving;

  const pageValue = [
    {
      title: "Goal",
      des: goal,
      icon: <FaBullseye />,
    },
    {
      title: "saving",
      des: newSaving,
      icon: <FaSave />,
      date: Date,
    },
    {
      title: "remaining",
      des: remaining,
      icon: <FaChartLine />,
    },
    {
      title: "Exit date",
      des: "2022/08/22",
      icon: <FaCalendarAlt />,
    },
  ];

  const goals = [
    {
      title: "Send Home",
      amount: "2000",
      due: "12/12/2022",
      priority: "1",
    },
    {
      title: "Send Home",
      amount: "2000",
      due: "12/12/2022",
      priority: "2",
    },
    {
      title: "Send Home",
      amount: "2000",
      due: "12/12/2022",
      priority: "3",
    },
    {
      title: "Send Home",
      amount: "2000",
      due: "12/12/2022",
      priority: "1",
    },
  ];
  const [progress, setProgress] = useState(0);

  const savings = [
    {
      goal: "A hut of funds",
      amount: "30000",
      progress: "30000",
      progressPer: progress,
      exitDate: "22/12/2023",
      team: "2",
    },
    {
      goal: "Save for cause",
      amount: "45000",
      progress: "30000",
      progressPer: progress,

      exitDate: "22/12/2023",
      team: "3",
    },
    {
      goal: "Call from vacation",
      amount: "14000",
      progress: "2000",
      progressPer: progress,
      exitDate: "22/12/2023",
      team: "4",
    },
    {
      goal: "Buy you a present",
      amount: "22000",
      progress: "15000",
      progressPer: progress,
      exitDate: "22/12/2023",
      team: "2",
    },
  ];
  var _ = require("lodash");
  const [sortItem, setSortItem] = useState();
  const sortedValues = _.orderBy(savings, sortItem);

  const transactionInfo = [...Array(4).keys()];

  console.log(((Math.random() + 1) * 100000).toFixed());
  let thisdate = new Date().getTime();

  console.log(
    moment()
      .subtract(((Math.random() + 1) * 100).toFixed(), "days")
      .calendar()
  );
  const randomDate = () => {
    return moment()
      .subtract(((Math.random() + 1) * 100).toFixed(), "days")
      .calendar();
  };
  const randomAmount = () => {
    return ((Math.random() + 1) * 100000).toFixed();
  };

  const randomdata = [
    {
      date: randomDate(),
      amount: randomAmount(),
    },
    {
      date: randomDate(),
      amount: randomAmount(),
    },
    {
      date: randomDate(),
      amount: randomAmount(),
    },
    {
      date: randomDate(),
      amount: randomAmount(),
    },
  ];

  return (
    <div className="dashHome pageContainer">
      <PageNavigation pageTitle={"Dashboard"} pageBtn={"Create goal"} />
      <div className="section">
        <div className="sectionItems">
          {pageValue.map((items, x) => (
            <Datacards
              items={items}
              newSaving={newSaving}
              goal={goal}
              key={x}
              prevSaving={prevSaving}
            />
          ))}
        </div>
      </div>
      <div className="section">
        <div className="sectionItems">
          <div className="linearFlow chartContainer" style={{ width: "60%" }}>
            <h2 className="chartHeading">Monthly Savings</h2>
            <LineChart
              data={{
                "2020-05-13": 20000,
                "2021-05-14": 32000,
                "2021-09-14": 80000,
                "2022-07-14": 90000,
              }}
            />
          </div>
          <div className="piesavings chartContainer" style={{ width: "35%" }}>
            <h2 className="chartHeading">Overall Savings</h2>
            <div className="pieContainer">
              <PieChart
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
      </div>
      <div className="section">
        <div className="sectionItems">
          <div className="goals chartContainer" style={{ width: "35%" }}>
            <h2 className="chartHeading">Goals</h2>
            <div className="goalsPeak">
              {goals.map((items) => (
                <Actions items={items} />
              ))}
            </div>
          </div>
          <div className="cashFlow chartContainer" style={{ width: "60%" }}>
            <h2 className="chartHeading">Cashflow</h2>

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
        </div>
      </div>
      <div className="section">
        <div className="sectionItems ">
          <div className="savingsTable chartContainer">
            <h2 className="chartHeading">Savings</h2>
            <table>
              <tbody>
                <tr>
                  <th>
                    Goals <FaSort onClick={() => setSortItem("goal")} />
                  </th>
                  <th>
                    Amount <FaSort onClick={() => setSortItem("amount")} />
                  </th>
                  <th>
                    Progress{" "}
                    <FaSort onClick={() => setSortItem("progressPer")} />
                  </th>
                  <th>
                    Exit Date <FaSort onClick={() => setSortItem("exitdate")} />
                  </th>
                  <th>
                    Team <FaSort onClick={() => setSortItem("team")} />
                  </th>
                </tr>

                {sortedValues.map((items, x) => {
                  items.progressPer = parseFloat(
                    (items.progress / items.amount) * 100
                  ).toFixed();
                  return <Savings savings={items} key={x} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="sectionItems">
          <div className="transactions chartContainer" style={{ width: "50%" }}>
            <h2 className="chartHeading">Transactions</h2>
            <div className="transactionDetails ">
              {transactionInfo.map((items, x) => (
                <Transactions transactionInfo={items} key={x} />
              ))}
            </div>
          </div>
          <div className="activities chartContainer" style={{ width: "45%" }}>
            <h2 className="chartHeading">Activities</h2>
            <BarChart
              data={{
                incoming: 40000,
                outgoing: 32000,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
