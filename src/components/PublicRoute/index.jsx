import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { selectUserData } from "../../features/auth/authSlice";
import { getLocalToken } from "../../utils/auth";
import Layout from "../Layout";

const PublicRoute = ({
  component: Component,
  isRestricted = false,
  hasLayout = true,
  ...rest
}) => {
  const accessToken = useSelector(selectUserData);
  const isLoggedIn = accessToken !== "" || getLocalToken();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn && isRestricted) {
          return <Redirect to="/" />;
        }

        return hasLayout ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default PublicRoute;
