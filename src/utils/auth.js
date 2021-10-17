import { LOCAL_STORAGE_REFRESH_TOKEN, LOCAL_STORAGE_TOKEN } from "../constants";
import { logout, setTokenFromLocalStorage } from "../features/auth/authSlice";

export const getLocalToken = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
  return token;
};

export const getLocalRefreshToken = () => {
  const refreshToken = localStorage.getItem(LOCAL_STORAGE_REFRESH_TOKEN);
  return refreshToken;
};

export const setLocalToken = (token) => {
  localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
};

export const setLocalRefreshToken = (refreshToken) => {
  localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN, refreshToken);
};

export const clearLocalToken = (dispatch) => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN);

  setTimeout(() => {
    dispatch(logout());
  }, 250);
};

export const setTokenFromLocalStorageToReduxStore = (dispatch) => {
  const token = getLocalToken();

  if (token && token !== "") {
    dispatch(setTokenFromLocalStorage(token));
  }
};
