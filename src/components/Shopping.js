import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Searchbar from "./Searchbar";
import styled from "styled-components";
import { shoppingItems as items, categories as cats } from "../data-model";
import ShoppingItem from "./ShoppingItem";
import { getCartItems, getFromLocal, setToLocal } from "../services";

const Grid = styled.section``;

const GridShoppingItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Shopping() {
  const [shoppingItems] = useState(items);
  const [categories] = useState(cats);
  const [cartItems, setCartItems] = useState(getFromLocal("cartItems") || []);

  useEffect(() => {
    loadCartItems();
  }, []);

  useEffect(() => {
    setToLocal("cartItems", cartItems);
  }, [cartItems]);

  function loadCartItems() {
    getCartItems()
      .then(data => setCartItems(data))
      .catch(error => console.log(error));
  }

  function handleItemSelect(item) {
    if (cartItems.findIndex(cartItem => cartItem.id === item.id) !== -1) {
      return;
    }

    setCartItems([...cartItems, item]);
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
      <GridShoppingItems>
        {cartItems.map(item => (
          <ShoppingItem
            key={item.id}
            text={item.name}
            image={item.image}
            onClick={() => handleItemRemove(item)}
          />
        ))}
      </GridShoppingItems>
      <Cards
        categories={categories}
        shoppingItems={shoppingItems}
        onItemSelect={handleItemSelect}
      />
    </Grid>
  );
}
export default Shopping;
