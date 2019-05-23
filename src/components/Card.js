import "../card.css";
import styled from "styled-components";
import React, { useState } from "react";

const StyledCard = styled.div`
  width: 80%;
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

  // const removeTodo = index => {
  //   const newTodos = [...cards];
  //   newTodos.splice(index, 1);
  //   setCards(newTodos);
  // };

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
  const fruits = cards.map((frucht, index) => (
    <Box key={index} onClick={props.clickHandler}>
      {frucht.name}
    </Box>
  ));

  return (
    <StyledCard className={`card ${expanded ? "expanded" : ""}`}>
      <Cardheader onClick={close}>
        <H4>{props.title}</H4>
      </Cardheader>
      <div className={status}>
        <Cardbody>
          <Grid size={50}>{fruits}</Grid>
        </Cardbody>
      </div>
    </StyledCard>
  );
};

export default Card;
