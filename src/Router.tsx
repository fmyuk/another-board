import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import RoomListContents from "./views/components/Templates/RoomListContents";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/roomList"} component={RoomListContents} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
