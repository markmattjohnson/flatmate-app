import React, { useState } from "react";
import Cards from "./components/Cards";
import styled from "styled-components";
import CardInShoppingcart from "./components/CardInShoppingcart";
import uid from "uid";

function Shoppingcarts() {
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

  const cardsInShoppingCart = cards.map(obj => {
    return (
      <CardInShoppingcart
        key={obj.id}
        index={obj.id}
        text={obj.name}
        onClickHandler={onClickHandler}
      />
    );
  });

  return (
    <div className="app">
      <div>shoppingcart</div>
      <Grid>{cardsInShoppingCart}</Grid>
      <div>Warenrubriken</div>
      <Cards clickHandler={addFruit} />
    </div>
  );
}
export default Shoppingcarts;
