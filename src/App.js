import React from "react";
import Shopping from "./components/Shopping";
import Todos from "./Todos";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles, Grid, Main } from "./common/globalStyles";

import Navigationbar from "./components/Navbar";

// const GlobalStyles = createGlobalStyle`

// @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

//   * {
//     box-sizing: border-box;
//   }

//   body {
//     margin: 0;
//     padding: 0;
//     font-family: roboto, sans-serif;
//   }
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-rows: 80px auto 60px;
//   text-align: center;
//   height: 100vh;
// `;

// const Main = styled.main`
//   overflow-y: scroll;
// `;

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
        </Main>
        <Navigationbar />
      </Grid>
    </BrowserRouter>
  );
}

export default App;
