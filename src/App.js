import React, { useEffect } from "react";
import { Switch } from "react-router";
import "./App.scss";
// import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Home from "./features/home";
import Login from "./features/auth/login";
import Register from "./features/auth/register";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import VerifyOTP from "./features/verifyOTP";
import { useDispatch } from "react-redux";
import { setTokenFromLocalStorageToReduxStore } from "./utils/auth";

toast.configure({
  newestOnTop: true,
  limit: 3,
});

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTokenFromLocalStorageToReduxStore(dispatch);
  }, [dispatch]);

  return (
    <>
      <Switch>
        <PublicRoute
          isRestricted={true}
          path="/login"
          component={Login}
          hasLayout={false}
          exact
        />
        <PublicRoute
          isRestricted={true}
          path="/register"
          component={Register}
          hasLayout={false}
          exact
        />
        <PublicRoute
          isRestricted={false}
          path="/verify-otp"
          component={VerifyOTP}
          exact
        />
        <PublicRoute
          isRestricted={false}
          path="/"
          component={Home}
          exact
          hasLayout={true}
        />
      </Switch>
    </>
  );
}
