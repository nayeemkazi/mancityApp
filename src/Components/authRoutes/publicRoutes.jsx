import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoutes = ({ user, component: Comp, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        return rest.restricted ? (
          user ? (
            <Redirect to="/dashboard" />
          ) : (
            <Comp {...props} user={user} />
          )
        ) : (
          <Comp {...props} user={user} />
        );
      }}
    ></Route>
  );
};

export default PublicRoutes;
