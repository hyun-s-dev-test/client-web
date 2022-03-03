import { createSlice } from "@reduxjs/toolkit";

const text = {
  termsOfService: "두산",
  privatePolicy: "두산",
  userLocation: "두산",
  receivePromotion: "두산",
};

const initialState = {
  agreementList: [
    { title: "termsOfService", text: text.termsOfService, required: true },
    { title: "privatePolicy", text: text.privatePolicy, required: true },
    { title: "userLocation", text: text.userLocation, required: false },
    { title: "receivePromotion", text: text.receivePromotion, required: false },
  ],
};

export const userAgreementSlice = createSlice({
  name: "userAgreement",
  initialState,
  reducers: {
    setTermsOfService: (state, action) => {
      state = action.payload;
    },
    setPrivatePolicy: (state, action) => {
      state = action.payload;
    },
    setUserLocation: (state, action) => {
      state = action.payload;
    },
    setReceivePromotion: (state, action) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPrivatePolicy, setReceivePromotion, setTermsOfService, setUserLocation } = userAgreementSlice.actions;

export default userAgreementSlice.reducer;
