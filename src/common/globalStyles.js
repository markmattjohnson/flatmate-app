import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: roboto, sans-serif;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  text-align: center;
  height: 100vh;
`;

export const Main = styled.main`
  overflow-y: scroll;
`;
