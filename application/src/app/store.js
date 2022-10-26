import { configureStore } from "@reduxjs/toolkit";
// import  from "../features/auth/authSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
