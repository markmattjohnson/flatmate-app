import React, { useState } from "react";
import Cards from "./Cards";
import Searchbar from "./Searchbar";
import styled from "styled-components";
import { shoppingItems as items, categories as cats } from "../data-model";
import ShoppingItem from "./ShoppingItem";

const Grid = styled.section`
    /* display: grid;
    grid-gap: 10px;
    margin: 0px 100px 30px 160px;
    grid-template-columns: repeat(auto-fit, ${props => props.size || "100"}px);
    grid-auto-rows: 50px auto auto; */
  `;

// maybe rename to shopping
function Shoppingcarts() {
  const [shoppingItems] = useState(items);
  const [categories] = useState(cats);
  const [cartItems, setCartItems] = useState([]);

  function handleItemSelect(item) {
    setCartItems([
      ...cartItems.filter(cartItem => item.id !== cartItem.id),
      item
    ]);
  }

  function handleItemRemove(item) {
    setCartItems(cartItems.filter(cartItem => item.id !== cartItem.id));
  }

  return (
    <Grid>
      <Searchbar
        shoppingItems={shoppingItems}
        onItemSelect={handleItemSelect}
      />
      <div>
        {cartItems.map(item => (
          <ShoppingItem
            key={item.id}
            text={item.name}
            image={item.image}
            onClick={() => handleItemRemove(item)}
          />
        ))}
      </div>
      <Cards
        categories={categories}
        shoppingItems={shoppingItems}
        onItemSelect={handleItemSelect}
      />
    </Grid>
  );
}
export default Shoppingcarts;
