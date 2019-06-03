import React, { useState } from "react";
import CardInShoppingcart from "./CardInShoppingcart";
import Cards from "./Cards";
import styled from "styled-components";
import uid from "uid";

function Searchbar() {
  const [cards, setCards] = useState([
    {
      name: "Ananas",
      id: uid(),
      image: "./images/pineapple.jpg"
    },
    {
      name: "Apfel",
      id: uid(),
      image: "./images/apple.jpg"
    },
    {
      name: "Brot",
      id: uid(),
      image: "./images/bread.jpg"
    },
    {
      name: "Aprikose",
      id: uid(),
      image: "./images/apricot.jpg"
    },
    {
      name: "Blaubeere",
      id: uid(),
      image: "./images/blueberries.jpg"
    },
    {
      name: "Avokado",
      id: uid(),
      image: "./images/avocado.jpg"
    },
    {
      name: "Banane",
      id: uid(),
      image: "./images/banana.jpg"
    },
    {
      name: "Birne",
      id: uid(),
      image: "./images/pear.jpg"
    },
    {
      name: "Rhabarber",
      id: uid(),
      image: "./images/rhuburb.jpg"
    },
    {
      name: "Gurke",
      id: uid(),
      image: "./images/cucumber.jpg"
    },
    {
      name: "Erdbeere",
      id: uid(),
      image: "./images/strawberries.jpg"
    },
    {
      name: "watermelon",
      id: uid(),
      image: "./images/watermelon.jpg"
    },
    {
      name: "Nutella",
      id: uid(),
      image: "./images/nutella.jpg"
    },
    {
      name: "Kaffeebohnen",
      id: uid(),
      image: "./images/coffeebeans.jpg"
    },
    {
      name: "Apfelfächer",
      id: uid(),
      image: "./images/apfelfächer.jpg"
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
    console.log(event.target, "Click");
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

  const cardList = searchValue === "" ? [] : filteredCards; //[]=cards to get addfruit and delete back

  // function CardList({ cards }) {
  //   return (
  //     <section>
  //       {cards.map(card => (
  //         <CardInShoppingcart
  //           key={card.id}
  //           index={card.id}
  //           text={card.name}
  //           image={card.image}
  //           onClickHandler={onClickHandler}
  //           onClickHandlerSearch={onClickHandlerSearch}
  //         />
  //       ))}
  //     </section>
  //   );
  // }

  const cardsInShoppingCart = cardList.map(obj => {
    return (
      <CardInShoppingcart
        key={obj.id}
        index={obj.id}
        text={obj.name}
        image={obj.image}
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
      <Grid />
      <Grid>{cardsInShoppingCart}</Grid>
      <Cards clickHandler={addFruit} />
    </div>
  );
}

export default Searchbar;
