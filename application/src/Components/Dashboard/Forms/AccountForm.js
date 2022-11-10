import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../../../features/account/accountSlicer";

const AccountForm = () => {
  const [account, setAccount] = useState({
    name: "",
  });

  const dispatch = useDispatch();
  const onchange = (e) => {
    setAccount((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(createAccount({ account }));
    console.log(account);
  };
  return (
    <form className="accountForm" onSubmit={submitForm}>
      <h2>Open new account</h2>
      <label htmlFor="">Account Name</label>
      <input type="text" value={account.name} name="name" onChange={onchange} />

      <button className="pageBtn">Create</button>
    </form>
  );
};

export default AccountForm;
