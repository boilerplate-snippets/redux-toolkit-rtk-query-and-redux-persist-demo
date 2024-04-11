import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";
import { Login } from "../../interfaces/login";

const initialState: Login = {
  isLoggedIn: false,
  userId: "",
  token: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        userId: string;
        token: string;
      }>
    ) => {
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userId = "";
      state.token = "";
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
