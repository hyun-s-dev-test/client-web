import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  password: null,
  name: null,
  year: null,
  month: null,
  day: null,
  sex: null,
  phone: null,
};

export const userInfoSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      // const { id, email, password, name, year, month, day, sex, phone } = action.payload;
      const validPayload = {};
      for (const [key, value] of Object.entries(action.payload)) {
        value ?? (validPayload[key] = value);
      }
      state = { ...state, ...validPayload };
    },
    resetUserInfo: (state) => {
      state = initialState;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setDate: (state, action) => {
      state.year = action.payload.year;
      state.month = action.payload.month;
      state.day = action.payload.day;
    },
    setSex: (state, action) => {
      state.sex = action.payload.sex;
    },
    setPhone: (state, action) => {
      state.phaone = action.payload.phone;
    },
    // setGpsAgreement: (state, action) => {
    //   state.gpsAgreement = action.payload.gpsAgreement;
    // },
    // setPromotionAgreement: (state, action) => {
    //   state.promotionAgreement = action.payload.promotionAgreement;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo, resetUserInfo, setId, setDate, setEmail, setName, setPassword, setPhone, setSex } =
  userInfoSlice.actions;

export default userInfoSlice.reducer;
