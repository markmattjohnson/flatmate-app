import React from "react";
import Shopping from "./components/Shopping";
import Todos from "./Todos";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Navigationbar from "./components/Navbar";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  text-align: center;
  height: 100vh;
`;

const Main = styled.main``;
function App() {
  return (
    <Grid>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" component={Shopping} />
            <Route path="/todos" component={Todos} />
          </Switch>
        </Main>
        <Navigationbar />
      </BrowserRouter>
    </Grid>
  );
}

export default App;
