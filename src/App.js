import React from "react";
import Shoppingcarts from "./Shoppingcarts";
import Todos from "./Todos";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Shoppingcarts} />
        <Route path="/shoppingcarts" component={Shoppingcarts} />
        <Route path="/todos" component={Todos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
