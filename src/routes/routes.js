import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
