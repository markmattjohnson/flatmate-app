import React, { useState } from "react";
import Shoppingcarts from "./components/Shoppingcarts";
import Todos from "./Todos";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_dv7mukeaf;
const PRESET = process.env.REACT_APP_CLOUDINARY_y6umlgqb;

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
  grid-template-rows: 80px auto 40px;
  text-align: center;
  height: 100vh;
`;

const Main = styled.main``;

function App() {
  const [image, setImage] = useState("");

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", PRESET);

    axios
      .post(url, formData, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
  }

  return (
    <Grid>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <div>
          {image ? (
            <img src={image} alt="" style={{ width: "100%" }} />
          ) : (
            <input type="file" name="file" onChange={upload} />
          )}
        </div>
        <Main>
          <Switch>
            <Route exact path="/" component={Shoppingcarts} />
            <Route path="/todos" component={Todos} />
          </Switch>
        </Main>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
