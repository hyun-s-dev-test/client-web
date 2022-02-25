import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "../../feature/auth/state/userInfoSlice";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});
