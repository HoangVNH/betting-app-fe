import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn, signUp, verifyUser } from "../../apis/authApi";
import { withToastForError } from "../../utils";
import { setLocalToken, setLocalRefreshToken } from "../../utils/auth";

export const signInThunk = createAsyncThunk(
  "auth/signIn",
  withToastForError(
    async (values) => signIn(values),
    "Login successfully!",
    "Something went wrong!"
  )
);

export const signUpThunk = createAsyncThunk(
  "auth/signUp",
  withToastForError(
    async (values) => signUp(values),
    "Register successfully!",
    "Something went wrong!"
  )
);

export const verifyOTPThunk = createAsyncThunk(
  "auth/verifyOTP",
  withToastForError(
    async (values) => verifyUser(values),
    "Verify successfully!",
    "Something went wrong!"
  )
);

const initialState = {
  isLoading: false,
  user: {
    accessToken: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokenFromLocalStorage: (state, { payload }) => {
      state.user.accessToken = payload;
    },
    logout: (state) => {
      state.user.accessToken = "";
    },
  },
  extraReducers: {
    [signInThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [signInThunk.rejected]: (state) => {
      state.isLoading = false;
    },
    [signInThunk.fulfilled]: (state, { payload }) => {
      const { accessToken, refreshToken } = payload;

      state.isLoading = false;
      state.user.accessToken = accessToken;

      setLocalToken(accessToken);
      setLocalRefreshToken(refreshToken);
    },
    [signUpThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [signUpThunk.rejected]: (state) => {
      state.isLoading = false;
    },
    [signUpThunk.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [verifyOTPThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [verifyOTPThunk.rejected]: (state) => {
      state.isLoading = false;
    },
    [verifyOTPThunk.fulfilled]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { logout, setTokenFromLocalStorage } = authSlice.actions;

export const selectIsLoading = (state) => state.auth.isLoading;
export const selectUserData = (state) => state.auth.user.accessToken;

export default authSlice.reducer;
