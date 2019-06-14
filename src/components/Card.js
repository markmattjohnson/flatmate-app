import styled from "styled-components";
import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ShoppingItem from "./ShoppingItem";

library.add(fab, faAngleDown, faAngleUp, faPlus);

const StyledFaIcon = styled(FontAwesomeIcon)`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-left: 35px;
  margin-top: 35px;
  color: white;
`;

const CustomInput = styled.input`
  text-align: center;
  margin-left: 220px;
  width: 30%;
  padding: 5px;
  border: 1px solid #72beb2;
  border-radius: 5px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  outline: none;
`;

const StyledCard = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
`;

const Cardheader = styled.div`
  padding: 10px;
  background-color: #72beb2;
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
  const [customInputExpanded, setcustomInputExpanded] = useState(false);
  const [customInputValue, setcustomInputValue] = useState("");

  const StyledCustomBox = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    line-height: 90px;
    background-color: #72beb2;
    margin: 5px;
  `;

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
        <>
          <FontAwesomeIcon icon="angle-up" />
        </>
      );
    } else {
      return (
        <>
          <FontAwesomeIcon icon="angle-down" />
        </>
      );
    }
  }

  function handleCustomInputChange(event) {
    const value = event.target.value;
    setcustomInputValue(value);
    console.log(customInputValue);
  }

  function toggleCustomInput() {
    if (customInputExpanded === true) {
      return (
        <CustomInput
          type="text"
          placeholder="text"
          onChange={handleCustomInputChange}
          value={customInputValue}
        />
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
          <Grid>
            {products}
            <StyledCustomBox
              onClick={item => {
                setcustomInputExpanded(!customInputExpanded);
                onItemSelect(item);
              }}
            >
              <StyledFaIcon icon="plus" className="fa-2x" />
            </StyledCustomBox>
            {toggleCustomInput()}
          </Grid>
        </Cardbody>
      )}
    </StyledCard>
  );
};

export default Card;
