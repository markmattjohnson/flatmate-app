import React, { useState, useEffect } from "react";
import CardInShoppingcart from "./components/CardInShoppingcart";
import styled from "styled-components";
import uid from "uid";

function Searchbar() {
  const [cards, setCards] = useState([
    {
      name: "Ananas",
      id: uid()
    },
    {
      name: "Apfel",
      id: uid()
    },
    {
      name: "Aprikose",
      id: uid()
    },
    {
      name: "Avokado",
      id: uid()
    },
    {
      name: "Banane",
      id: uid()
    },
    {
      name: "Birne",
      id: uid()
    },
    {
      name: "Ananassaft",
      id: uid()
    },
    {
      name: "Apfelmus",
      id: uid()
    },
    {
      name: "Apfelfächer",
      id: uid()
    },
    {
      name: "Avokadocreme",
      id: uid()
    },
    {
      name: "Bananeneis",
      id: uid()
    },
    {
      name: "Birnensaft",
      id: uid()
    }
  ]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const Grid = styled.section`
    display: grid;
    grid-gap: 10px;
    margin-left: 160px;
    margin-right: 100px;
    margin-bottom: 30px;
    grid-template-columns: repeat(auto-fit, ${props => props.size || "100"}px);
    grid-auto-rows: ${props => props.size || "100"}px;
  `;

  const onClickHandler = event => {
    const dataId = event.target.getAttribute("data-id");
    const cardsNew = cards.filter(card => card.id !== dataId);

    setCards(cardsNew);
  };

  const onClickHandlerSearch = event => {
    const cardsNames = cards.map(fruit => fruit.name);
    const value = event.target.value.toLowerCase();
    // console.log(typeof value);
    setSearchValue(value);

    const cardsNewNames = cardsNames.filter(cardsName =>
      cardsName.toLowerCase().includes(value)
    );
    console.log(cardsNewNames);
    let newCards = [];
    cardsNewNames.forEach(cardsName => {
      //console.log(newCards);
      cards.forEach(card => {
        if (card.name === cardsName) {
          //   console.log("IST GLEICH!!!");
          //   console.log(card.name);
          //   console.log(cardsName);
          newCards = [...newCards, card];
        }
      });
    });
    console.log(newCards);
    setFilteredCards(newCards);

    // setCards(cardsNew);
  };
  useEffect(() => console.log(filteredCards));

  const cardz = searchValue === "" ? cards : filteredCards;
  const cardsInShoppingCart = cardz.map(obj => {
    return (
      <CardInShoppingcart
        key={obj.id}
        index={obj.id}
        text={obj.name}
        onClickHandler={onClickHandler}
        onClickHandlerSearch={onClickHandlerSearch}
      />
    );
  });

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        onChange={onClickHandlerSearch}
      />
      <Grid>{cardsInShoppingCart}</Grid>
    </div>
  );
}

export default Searchbar;
