import React from "react";
import { Route } from "react-router-dom";
import Profile from "./features/Profile/Profile";
import MainPage from "./features/MainPage/MainPage";

const Routes = (): JSX.Element => {
  return (
    <>
      <Route exact path="/profile/:profileId">
        <Profile />
      </Route>
      <Route exact path="/">
        <MainPage />
      </Route>
    </>
  );
};

export default Routes;
