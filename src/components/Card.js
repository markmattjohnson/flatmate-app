import "../card.css";
import styled from "styled-components";
import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBeer,
  faCoffee,
  faWineGlassAlt,
  faStroopwafel,
  faAppleAlt,
  faCookie
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faBeer,
  faCoffee,
  faWineGlassAlt,
  faStroopwafel,
  faAppleAlt,
  faCookie
);

const StyledCard = styled.div`
  width: 100%;
  border: 1px solid black;
  margin: auto;
  margin-bottom: 20px;
`;

const Cardheader = styled.div`
  padding: 5px;
  background-color: #9898d4;
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
    { name: "Kakao" },
    { name: "Bohnen" },
    { name: "Ananas" }
  ]);

  const close = () => {
    setExpanded(!expanded);
  };

  const status = expanded ? "expanded" : "closed";

  const Grid = styled.section`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, ${props => props.size || "100"}px);
    grid-auto-rows: ${props => props.size || "100"}px;
  `;

  const Box = styled.div`
    background: hotpink;
    border-radius: ${props => props.radius || 0}px;
    cursor: pointer;

    &:hover {
      background: mediumseagreen;
    }
  `;

  const products = cards.map((product, index) => (
    <Box key={index} onClick={props.clickHandler}>
      {product.name}
    </Box>
  ));

  return (
    <StyledCard className={`card ${expanded ? "expanded" : ""}`}>
      <Cardheader onClick={close}>
        <H4>
          {props.title}
          <FontAwesomeIcon icon="stroopwafel" />
        </H4>
      </Cardheader>
      <div className={status}>
        <Cardbody>
          <Grid size={50}>{products}</Grid>
        </Cardbody>
      </div>
    </StyledCard>
  );
};

export default Card;
