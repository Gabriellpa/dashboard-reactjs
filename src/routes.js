import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Panel from "./components/Panel";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/panel" render={(props) => <Panel {...props} />} />
        <Route
          render={(props) => {
            return <h1>not found</h1>;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}
