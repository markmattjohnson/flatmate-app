import React, { useState } from "react";
import Cards from "./components/Cards";
import styled from "styled-components";
import CardInEK from "./components/CardInEK";
import uid from "uid";

function App() {
  const [cards, setCards] = useState([
    {
      name: "Bananen",
      id: uid()
    },
    {
      name: "Äpfel",
      id: uid()
    },
    {
      name: "Birnen",
      id: uid()
    }
  ]);

  const addFruit = event => {
    setCards([...cards, { name: event.target.innerText, id: uid() }]);
  };

  const onClickHandler = event => {
    console.log(event.target.getAttribute("data-id"));
    const dataId = event.target.getAttribute("data-id");
    const cardsNew = cards.filter(card => card.id !== dataId);

    setCards(cardsNew);
  };

  const Grid = styled.section`
    display: grid;
    grid-gap: 10px;
    margin-left: 160px;
    margin-right: 100px;
    margin-bottom: 30px;
    grid-template-columns: repeat(auto-fit, ${props => props.size || "100"}px);
    grid-auto-rows: ${props => props.size || "100"}px;
  `;

  const cardsInEk = cards.map(obj => {
    return (
      <CardInEK
        key={obj.id}
        index={obj.id}
        text={obj.name}
        onClickHandler={onClickHandler}
      />
    );
  });

  return (
    <div className="app">
      <Grid>{cardsInEk}</Grid>
      <Cards clickHandler={addFruit} />
    </div>
  );
}

export default App;
