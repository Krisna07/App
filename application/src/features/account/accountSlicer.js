import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  accounts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = accountSlice.actions;
export default accountSlice.reducer;
