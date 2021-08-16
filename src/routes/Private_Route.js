import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!user ? (
          <RouteComponent {...routeProps}></RouteComponent>
        ) : (
          <Redirect to={"/login"}></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
