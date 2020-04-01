import React from "react";
import { Route } from "react-router-dom";
import Profile from "./features/Profile/Profile";

const Routes = (): JSX.Element => {
  return (
    <Route exact path="/profile/:profileId">
      <Profile />
    </Route>
  );
};

export default Routes;
