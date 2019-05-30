import React, { useState } from "react";
import CardInShoppingcart from "./CardInShoppingcart";
import Cards from "./Cards";
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
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    border: 1px solid black;
    min-height: 150px;
    margin-bottom: 10px;
  `;

  const addFruit = event => {
    setCards([...cards, { name: event.target.innerText, id: uid() }]);
  };

  const onClickHandler = event => {
    const dataId = event.target.getAttribute("data-id");
    const cardsNew = cards.filter(card => card.id !== dataId);

    setCards(cardsNew);
  };

  const onClickHandlerSearch = event => {
    const cardsNames = cards.map(product => product.name);
    const value = event.target.value.toLowerCase();
    setSearchValue(value);

    const cardsNewNames = cardsNames.filter(cardsName =>
      cardsName.toLowerCase().includes(value)
    );
    let newCards = [];
    cardsNewNames.forEach(cardsName => {
      cards.forEach(card => {
        if (card.name === cardsName) {
          newCards = [...newCards, card];
        }
      });
    });
    setFilteredCards(newCards);
  };

  const cardList = searchValue === "" ? cards : filteredCards;
  const cardsInShoppingCart = cardList.map(obj => {
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
      <Cards clickHandler={addFruit} />
    </div>
  );
}

export default Searchbar;
