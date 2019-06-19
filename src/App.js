import React from "react";
import Shopping from "./components/Shopping";
import Todos from "./components/Todos";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles, Grid, Main } from "./common/globalStyles";
import Navigationbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Grid>
        <GlobalStyles />
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" component={Shopping} />
            <Route path="/todos" component={Todos} />
          </Switch>
          <Navigationbar />
        </Main>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
