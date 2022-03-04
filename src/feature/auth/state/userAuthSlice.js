import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  //   email: null,
  password: null,
  name: null,
  year: null,
  month: null,
  day: null,
  // birth: null,
  gender: null,
  phone: null,
  agreement: { default: true },
  //   valid: false,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
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
      for (const [key, value] of Object.entries(state)) {
        state[key] = null;
      }
      //   state = initialState;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    // setEmail: (state, action) => {
    //   state.email = action.payload;
    // },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDate: (state, action) => {
      console.log("action.payload", action.payload);
      //   state = { ...state, ...action.payload };
      const { year, month, day } = action.payload;
      state.year = year;
      state.month = month.length === 1 ? `0${month}` : month;
      state.day = day.length === 1 ? `0${day}` : day;
    },
    setDay: (state, action) => {
      state.day = action.payload.length === 1 ? `0${action.payload}` : action.payload;
    },
    setMonth: (state, action) => {
      state.month = action.payload.length === 1 ? `0${action.payload}` : action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setGender: (state, action) => {
      if (action.payload === "남성") state.gender = "M";
      if (action.payload === "여성") state.gender = "F";
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setAgreement: (state, action) => {
      state.agreement = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserInfo,
  resetUserInfo,
  setId,
  setDate,
  //   setEmail,
  setName,
  setPassword,
  setPhone,
  setGender,
  setDay,
  setMonth,
  setYear,
  setAgreement,
} = userAuthSlice.actions;

export default userAuthSlice.reducer;
