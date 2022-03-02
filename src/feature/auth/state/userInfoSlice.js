import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../../common/api/api";

const getUser = createAsyncThunk("users/getUser", async (data, thunkAPI) => {
  const response = await request.get("/user", data);
  return response.data;
});

const postUser = createAsyncThunk("users/postUser", async (data, thunkAPI) => {
  const response = await request.post("/user", data);
  return response.data;
});

const patchUser = createAsyncThunk("users/patchUser", async (data, thunkAPI) => {
  const response = await request.patch("/user", data);
  return response.data;
});

const initialState = {
  id: null,
  email: null,
  password: null,
  name: null,
  year: null,
  month: null,
  day: null,
  gender: null,
  phone: null,
};

export const userInfoSlice = createSlice({
  name: "userInfo",
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
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDate: (state, action) => {
      state.year = action.payload;
      state.month = action.payload;
      state.day = action.payload;
    },
    setDay: (state, action) => {
      state.day = action.payload;
    },
    setMonth: (state, action) => {
      state.month = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state = { ...state, ...action.payload };
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state = { ...state, ...action.payload };
      })
      .addCase(patchUser.fulfilled, (state, action) => {
        state = { ...state, ...action.payload };
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserInfo,
  resetUserInfo,
  setId,
  setDate,
  setEmail,
  setName,
  setPassword,
  setPhone,
  setGender,
  setDay,
  setMonth,
  setYear,
} = userInfoSlice.actions;

export default userInfoSlice.reducer;
