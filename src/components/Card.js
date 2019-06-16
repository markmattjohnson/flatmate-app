import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ShoppingItem from "./ShoppingItem";
import uid from "uid";

library.add(fab, faAngleDown, faAngleUp, faPlus);

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

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
  const [image, setImage] = useState("");

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
  console.log("before", shoppingItems);
  const products = shoppingItems.map(item => (
    <ShoppingItem
      key={item.id}
      name={item.name}
      image={item.image}
      onClick={() => onItemSelect(item)}
    />
  ));
  console.log("abc", products);

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
        <form onSubmit={handleSubmit}>
          <CustomInput
            type="text"
            placeholder="text"
            onChange={handleCustomInputChange}
            value={customInputValue}
          />
        </form>
      );
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!customInputValue) return;
    const newFruit = {
      id: uid(),
      name: customInputValue
      // image:
      //   "http://www.greatgrubclub.com/domains/greatgrubclub.com/local/media/images/medium/4_1_1_apple.jpg"
    };
    onItemSelect(newFruit);
    console.log(newFruit);
    console.log(customInputValue);
  };

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", PRESET);

    axios
      .post(url, formData, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
  }

  return (
    <>
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
                onClick={() => setcustomInputExpanded(!customInputExpanded)}
              >
                <StyledFaIcon icon="plus" className="fa-2x" />
              </StyledCustomBox>
              {toggleCustomInput()}
            </Grid>
          </Cardbody>
        )}
      </StyledCard>
      <div>
        {image ? (
          <img src={image} alt="" style={{ width: "100%" }} />
        ) : (
          <input type="file" name="file" onChange={upload} />
        )}
      </div>
    </>
  );
};

export default Card;
