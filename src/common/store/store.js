import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "../../feature/auth/state/userAuthSlice";
import userInfoReducer from "../../feature/auth/state/userInfoSlice";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    userAuth: userAuthSlice,
  },
});
