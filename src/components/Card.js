import styled from "styled-components";
import React, { useState } from "react";
import {
  CustomInput,
  CustomInputUpload,
  StyledCard,
  Cardheader,
  Cardbody,
  H4,
  Grid,
  StyledCustomBox
} from "../common/cardStyles";

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

const Card = ({ category, shoppingItems, onItemSelect }) => {
  const [expanded, setExpanded] = useState(false);
  const [customInputExpanded, setcustomInputExpanded] = useState(false);
  const [customInputValue, setcustomInputValue] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState("");

  function onImageChange(e) {
    setImage(e.target.files[0]);
    setImagePrev(URL.createObjectURL(e.target.files[0]));
  }

  const products = shoppingItems.map(item => (
    <ShoppingItem
      key={item.id}
      name={item.name}
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
  }

  function toggleCustomInput() {
    if (customInputExpanded === true) {
      return (
        <form onSubmit={handleSubmit}>
          <CustomInput
            type="text"
            placeholder="Deins!"
            onChange={handleCustomInputChange}
            value={customInputValue}
          />
          <div>
            {imagePrev ? (
              <img src={imagePrev} alt="" style={{ width: "100%" }} />
            ) : (
              <CustomInputUpload
                type="file"
                name="file"
                onChange={onImageChange}
              />
            )}
          </div>
        </form>
      );
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!customInputValue) return;

    let newFruit;

    if (image) {
      const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", PRESET);

      axios
        .post(url, formData, {
          headers: {
            "Content-type": "multipart/form-data"
          }
        })
        .then(res => {
          newFruit = {
            id: uid(),
            name: customInputValue,
            image: res.data.secure_url
          };

          onItemSelect(newFruit);
          setImagePrev("");
          setcustomInputValue("");
        })
        .catch(err => console.error(err));
    } else {
      newFruit = {
        id: uid(),
        name: customInputValue,
        image: ""
      };

      onItemSelect(newFruit);
    }
  };

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
    </>
  );
};

export default Card;
