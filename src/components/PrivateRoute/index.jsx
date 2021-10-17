import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { selectUserData } from "../../features/auth/authSlice";
import { getLocalToken } from "../../utils/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const accessToken = useSelector(selectUserData);
  const isLoggedIn = accessToken !== "" || getLocalToken();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
