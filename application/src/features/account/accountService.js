import axios from "axios";
const API_URL = "/api/account/";

const createAccount = async (accountData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, accountData, config);
  return response.data;
};
const accountService = {
  createAccount,
};
export default accountService;
