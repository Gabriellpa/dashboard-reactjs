import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

import Conversation from "../Conversation";
export default function Panel({ match: { url } }) {
  return (
    <Fragment>
      <ul>
        <li>
          <Link to={`${url}/conversation`}>Conversation</Link>
        </li>
        <li>
          <Link to={`${url}/dashboard`}>Dashboard</Link>
        </li>
      </ul>
      <Route
        path={`${url}/conversation`}
        render={(props) => (
          <Conversation {...props} pageName={"conversation"} />
        )}
      />
      <Route
        path={`${url}/dashboard`}
        render={(props) => <Conversation {...props} pageName={"dashboard"} />}
      />
    </Fragment>
  );
}
