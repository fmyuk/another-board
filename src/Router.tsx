import React from "react";
import { Switch, Route } from "react-router";
import { RoomListContents } from "./views/components/Templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/room"} component={RoomListContents} />
    </Switch>
  );
};

export default Router;
