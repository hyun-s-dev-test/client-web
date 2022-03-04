import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../../common/api/api";

export const userLogin = createAsyncThunk("userInfo/userLogin", async ({ url, data }, { rejectWithValue }) => {
  try {
    const response = await request.post(url, data);
    const birthDate = response.data.birth.split("-");
    const newData = { ...response.data, year: birthDate[0], month: birthDate[1], day: birthDate[2] };
    return newData;
  } catch (err) {
    let error = err; // cast the error for access
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const getUser = createAsyncThunk("userInfo/getUser", async ({ url, data }, { rejectWithValue }) => {
  try {
    const response = await request.get(url, data);
    return response.data;
  } catch (err) {
    let error = err; // cast the error for access
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const postUser = createAsyncThunk("userInfo/postUser", async ({ url, data }, { rejectWithValue }) => {
  try {
    const response = await request.post(url, data);
    return response.data;
  } catch (err) {
    let error = err; // cast the error for access
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const patchUser = createAsyncThunk("userInfo/patchUser", async ({ url, data }, { rejectWithValue }) => {
  try {
    const response = await request.patch(url, data);
    return response.data;
  } catch (err) {
    let error = err; // cast the error for access
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const initialState = {
  pk: null,
  id: null,
  email: null,
  password: null,
  name: null,
  year: null,
  month: null,
  day: null,
  gender: null,
  phone: null,
  error: null,
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
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state = { ...state, ...action.payload };
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state = { ...state, ...action.payload };
    });
    builder.addCase(getUser.rejected, (state, action) => {
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.pk = action.payload;
    });
    builder.addCase(postUser.rejected, (state, action) => {
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(patchUser.fulfilled, (state, action) => {
      state = { ...state, ...action.payload };
    });
    builder.addCase(patchUser.rejected, (state, action) => {
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
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
