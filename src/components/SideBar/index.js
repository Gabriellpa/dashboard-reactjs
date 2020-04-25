import React from "react";
import { Route, Switch } from "react-router-dom";

import Conversation from "../Conversation";
import Drawer from "../Drawer";
export default function SideBar({ match: { url } }) {
  return (
    <Drawer>
      <Switch>
        <Route exact path={`${url}`} render={(props) => <h1>panel</h1>} />
        <Route
          path={`${url}/conversation`}
          render={(props) => (
            <Conversation {...props} pageName={"conversation"} />
          )}
        />
        <Route
          exact
          path={`${url}/dashboard`}
          render={(props) => <Conversation {...props} pageName={"dashboard"} />}
        />
        <Route
          render={(props) => {
            return <h1>404 - Not found</h1>;
          }}
        />
      </Switch>
    </Drawer>
  );
}
