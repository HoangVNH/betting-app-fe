import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/product/productSlice";
import { apiSlice } from "../features/auth/verifyOTP/verify-otp-api-slice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    product: productReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
