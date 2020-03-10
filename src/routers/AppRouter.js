import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import HomePage from "../components/HomePage";

import NoMatch from "../components/NoMatch";



const AppRouter = () => (

  <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route component={NoMatch} />
      </Switch>
  </BrowserRouter>
);

export default AppRouter;
