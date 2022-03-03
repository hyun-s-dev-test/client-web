import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "../../feature/auth/state/userAuthSlice";
import userInfoReducer from "../../feature/auth/state/userInfoSlice";
import userAgreementReducer from "../../feature/auth/state/userAgreementSlice";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    userAuth: userAuthReducer,
    userAgreement: userAgreementReducer,
  },
});
