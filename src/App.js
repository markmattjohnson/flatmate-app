import React, { useState } from "react";
import Shoppingcarts from "./Shoppingcarts";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Shoppingcarts} />
        <Route path="/shoppingcarts" component={Shoppingcarts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
