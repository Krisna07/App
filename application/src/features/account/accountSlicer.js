import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accountService from "./accountService";

const initialState = {
  account: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
//createAccount
export const createAccount = createAsyncThunk(
  "account/create",
  async ({ account }, thunkAPI) => {
    try {
      console.log(account);
      const token = thunkAPI.getState().auth.user.token;
      return await accountService.createAccount(account, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.accounts.push(action.payload);
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = accountSlice.actions;
export default accountSlice.reducer;
