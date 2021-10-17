import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../../apis/authApi";
import { showSuccessToast, showErrorToast } from "../../services/toastService";
import { setLocalToken, setLocalRefreshToken } from "../../utils/auth";

export const signInThunk = createAsyncThunk("auth/signIn", async (values) => {
  try {
    const {
      data: { accessToken, refreshToken },
    } = await signIn(values);

    setLocalToken(accessToken);
    setLocalRefreshToken(refreshToken);
    showSuccessToast("Login successfully!");

    return { accessToken };
  } catch (error) {
    showErrorToast("Something went wrong!");
  }
});

export const signUpThunk = createAsyncThunk("auth/signUp", async (values) => {
  try {
    await signUp(values);

    showSuccessToast("Register successfully!");
  } catch (error) {
    showErrorToast("Something went wrong!");
  }
});

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
      state.isLoggedIn = false;
    },
    [signInThunk.rejected]: (state) => {
      state.isLoading = false;
    },
    [signInThunk.fulfilled]: (state, { payload }) => {
      const { accessToken } = payload;

      state.user.accessToken = accessToken;
      state.isLoading = false;
      state.isLoggedIn = true;
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
  },
});

export const { logout, setTokenFromLocalStorage } = authSlice.actions;

export const selectIsLoadingLogin = (state) => state.auth.isLoading;
export const selectUserData = (state) => state.auth.user.accessToken;

export default authSlice.reducer;
