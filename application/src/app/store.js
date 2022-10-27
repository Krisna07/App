import { configureStore } from "@reduxjs/toolkit";
// import  from "../features/auth/authSlice";
import authReducer from "../features/auth/authSlice";
import accountReducer from "../features/account/accountSlicer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    account: accountReducer,
  },
});
