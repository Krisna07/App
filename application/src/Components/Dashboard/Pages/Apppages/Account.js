// import React from "react";
import PageNavigation from "../../miniComponents/PageNavigation";
import "./Account.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountForm from "../../Forms/AccountForm";
const Account = () => {
  const [account, setAccount] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/account`, { headers: "" })
      .then((res) => {
        setAccount(res.data);
      });
  }, [account]);
  console.log(account);
  return (
    <div className=" pageContainer">
      <PageNavigation pageBtn={"Create account"} pageTitle={"Accounts"} />
      <AccountForm />
    </div>
  );
};

export default Account;
