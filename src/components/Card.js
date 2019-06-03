import styled from "styled-components";
import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import ShoppingItem from "./ShoppingItem";

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

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  min-height: 150px;
  margin-bottom: 10px;
`;

const Card = ({ category, shoppingItems, onItemSelect }) => {
  const [expanded, setExpanded] = useState(false);

  // const Box = styled.div`
  //   background: hotpink;
  //   border-radius: ${props => props.radius || 0}px;
  //   cursor: pointer;

  //   &:hover {
  //     background: mediumseagreen;
  //   }
  // `;

  const products = shoppingItems.map(item => (
    <ShoppingItem
      key={item.id}
      text={item.name}
      image={item.image}
      onClick={() => onItemSelect(item)}
    />
  ));

  return (
    <StyledCard className={`card ${expanded ? "expanded" : ""}`}>
      <Cardheader onClick={() => setExpanded(!expanded)}>
        <H4>
          {category.name}
          <hr />
          <FontAwesomeIcon icon="stroopwafel" />
        </H4>
      </Cardheader>
      {expanded && (
        <Cardbody>
          <Grid>{products}</Grid>
        </Cardbody>
      )}
    </StyledCard>
  );
};

export default Card;
