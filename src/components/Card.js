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

const Futter = styled.div`
  height: 100px;
  width: 100px;
  background-color: blanchedalmond;
  border-radius: 20px;
`;

const H4 = styled.h4`
  margin: 0;
`;

const Card = props => {
  const [expanded, setExpanded] = useState(false);

  const close = () => {
    setExpanded(!expanded);
  };

  const status = expanded ? "expanded" : "closed";
  return (
    <StyledCard className={`card ${expanded ? "expanded" : ""}`}>
      <Cardheader onClick={close}>
        <H4>{props.title}</H4>
      </Cardheader>
      <div className={status}>
        <Cardbody>
          <Futter />
        </Cardbody>
      </div>
    </StyledCard>
  );
};

export default Card;
