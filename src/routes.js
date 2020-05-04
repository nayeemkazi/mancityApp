import React from "react";
import Layout from "./Hoc/Layout";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./Components/authRoutes/privateRoutes";
import PublicRoute from "./Components/authRoutes/publicRoutes";

import Home from "./Components/home";
import SignIn from "./Components/signin";

import Dashboard from "./Components/admin/Dashboard";
import AdminMatches from "./Components/admin/matches";

const Routes = (props) => {
  // console.log(props);
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />
        <PublicRoute
          {...props}
          restricted={true}
          path="/sign_in"
          exact
          component={SignIn}
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/"
          exact
          component={Home}
        />

        {/* <Route exact component={Dashboard} path="/dashboard" /> */}
        {/* <Route exact component={SignIn} path="/sign_in" /> */}
        {/* <Route exact component={Home} path="/" /> */}
      </Switch>
    </Layout>
  );
};
export default Routes;
