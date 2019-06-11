import styled from "styled-components";
import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import ShoppingItem from "./ShoppingItem";

library.add(fab, faAngleDown, faAngleUp);

const StyledCard = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
`;

const Cardheader = styled.div`
  padding: 10px;
  background-color: rgb(64, 165, 219);
  cursor: pointer;
  border-radius: 5px;
  margin: 0 10px 0 10px;
`;

const Cardbody = styled.div`
  padding: 5px;
`;

const H4 = styled.h4`
  display: flex;
  justify-content: space-between;
  margin: 0 10px 0 10px;
  color: whitesmoke;
  font-size: 18px;
  font-family: roboto;
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

  const products = shoppingItems.map(item => (
    <ShoppingItem
      key={item.id}
      text={item.name}
      image={item.image}
      onClick={() => onItemSelect(item)}
    />
  ));

  function toggleIcon() {
    if (expanded === true) {
      return (
        <p1>
          <FontAwesomeIcon icon="angle-down" />
        </p1>
      );
    } else {
      return (
        <p1>
          <FontAwesomeIcon icon="angle-up" />
        </p1>
      );
    }
  }

  return (
    <StyledCard>
      <Cardheader onClick={() => setExpanded(!expanded)}>
        <H4>
          {category.name}
          {toggleIcon()}
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
