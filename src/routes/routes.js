import React from "react";

import { Route } from "react-router-dom";

import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./Private_Route";
import Home from "../pages/Home/Home";

import Login from "../pages/Login/Login";

export default function Routes() {
  return (
    <>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Home}></PrivateRoute>
    </>
  );
}
