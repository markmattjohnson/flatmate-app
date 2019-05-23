import React, { useState } from "react";
import Cards from "./components/Cards";
import styled from "styled-components";
import CardInEK from "./components/CardInEK";
import uid from "uid";

function App() {
  const [cards, setCards] = useState([
    {
      name: "Bananen",
      id: uid(),
      amount: 1
    },
    {
      name: "Äpfel",
      id: uid(),
      amount: 1
    },
    {
      name: "Birnen",
      id: uid(),
      amount: 1
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
    grid-template-columns: repeat(auto-fit, ${props => props.size || "100"}px);
    grid-auto-rows: ${props => props.size || "100"}px;
  `;

  const Box = styled.div`
    background: hotpink;
    border-radius: ${props => props.radius || 0}px;

    &:hover {
      background: mediumseagreen;
    }
  `;
  const cardsInEk = cards.map(obj => {
    return (
      <CardInEK
        key={obj.id}
        index={obj.id}
        text={obj.name}
        amount={obj.amount}
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
