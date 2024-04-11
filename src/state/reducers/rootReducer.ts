import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "../slices/auth/loginSlice";
import { supabaseApi } from "../queries/authApi";

export const rootReducer = combineReducers({
  login: loginSlice,
  [supabaseApi.reducerPath]: supabaseApi.reducer,
});
