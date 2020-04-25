import React, { Fragment } from "react";

import SideBar from "../SideBar";

export default function Panel(props) {
  return (
    <Fragment>
      <SideBar {...props} />
    </Fragment>
  );
}
