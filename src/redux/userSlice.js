import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    isUser: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.isUser = true;
    },

    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },

    loginFaliure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      // state.currentUser = null;
      state.isUser = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFaliure, logout } =
  userSlice.actions; // انت ديماً بتنسي دول
export default userSlice.reducer; // انت ديماً بتنسي دول
