import React, { useState } from "react";
import Cards from "./Cards";
import Searchbar from "./Searchbar";
import styled from "styled-components";
import CardInShoppingcart from "./CardInShoppingcart";
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

  // const addFruit = event => {
  //   setCards([...cards, { name: event.target.innerText, id: uid() }]);
  // };

  // const onClickHandler = event => {
  //   const dataId = event.target.getAttribute("data-id");
  //   const cardsNew = cards.filter(card => card.id !== dataId);

  //   setCards(cardsNew);
  // };

  const Grid = styled.section`
    /* display: grid;
    grid-gap: 10px;
    margin: 0px 100px 30px 160px;
    grid-template-columns: repeat(auto-fit, ${props => props.size || "100"}px);
    grid-auto-rows: 50px auto auto; */
  `;

  // const cardsInShoppingCart = cards.map(obj => {
  //   return (
  //     <CardInShoppingcart
  //       key={obj.id}
  //       index={obj.id}
  //       text={obj.name}
  //       onClickHandler={onClickHandler}
  //     />
  //   );
  // });

  return (
    <Grid>
      <Searchbar />
    </Grid>
  );
}
export default Shoppingcarts;
