import "../card.css";
import styled from "styled-components";
import React, { useState } from "react";
import uid from "uid";
import CardInShoppingcart from "./CardInShoppingcart";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faStroopwafel);

const StyledCard = styled.div`
  width: 100%;
  border: 1px solid black;
  margin: auto;
  margin-bottom: 20px;
`;

const Cardheader = styled.div`
  padding: 5px;
  background-color: papayawhip;
  height: 30px;
  cursor: pointer;
`;

const Cardbody = styled.div`
  padding: 5px;
`;

const H4 = styled.h4`
  margin: 0;
`;

const Card = props => {
  const [expanded, setExpanded] = useState(false);
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
      name: "Watermelon",
      id: uid(),
      image: "./images/watermelon.jpg"
    }
  ]);

  const close = () => {
    setExpanded(!expanded);
  };

  const status = expanded ? "expanded" : "closed";

  const Grid = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    min-height: 150px;
    margin-bottom: 10px;
  `;

  // const Box = styled.div`
  //   background: hotpink;
  //   border-radius: ${props => props.radius || 0}px;
  //   cursor: pointer;

  //   &:hover {
  //     background: mediumseagreen;
  //   }
  // `;

  const Image = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
  `;

  const onClickHandler = event => {
    console.log(event.target, "Click");
    const dataId = event.target.getAttribute("data-id");
    const cardsNew = cards.filter(card => card.id !== dataId);

    setCards(cardsNew);
  };

  // const cardsInShoppingCart = cards.map(obj => {
  //   return (
  //     <CardInShoppingcart
  //       key={obj.id}
  //       index={obj.id}
  //       text={obj.name}
  //       image={obj.image}
  //       onClickHandler={onClickHandler}
  //     />
  //   );
  // });

  const products = cards.map((product, index) => (
    <div
      className="box"
      key={index}
      data-id={props.index}
      image={props.image}
      onClick={props.clickHandler}
    >
      <Image src={props.image} data-id={props.index} alt="" />
    </div>
  ));

  return (
    <StyledCard className={`card ${expanded ? "expanded" : ""}`}>
      <Cardheader onClick={close}>
        <H4>
          {props.title}
          <hr />
          <FontAwesomeIcon icon="stroopwafel" />
        </H4>
      </Cardheader>
      <div className={status}>
        <Cardbody>
          <Grid>{products}</Grid>
        </Cardbody>
      </div>
    </StyledCard>
  );
};

export default Card;
