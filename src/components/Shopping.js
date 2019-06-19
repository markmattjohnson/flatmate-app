import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Searchbar from "./Searchbar";
import { shoppingItems as items, categories as cats } from "../data-model";
import ShoppingItem from "./ShoppingItem";
import { getCartItems, getFromLocal, setToLocal } from "../services";
import {
  ShoppingPage,
  ShoppingItems,
  ShoppingItemsHeadline
} from "../common/shoppingStyles";

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
    console.log(item);
    if (cartItems.findIndex(cartItem => cartItem.id === item.id) !== -1) {
      return;
    }
    setCartItems([...cartItems, item]);
  }

  function handleItemRemove(item) {
    setCartItems(cartItems.filter(cartItem => item.id !== cartItem.id));
  }

  return (
    <ShoppingPage>
      <Searchbar
        shoppingItems={shoppingItems}
        onItemSelect={handleItemSelect}
      />
      <ShoppingItemsHeadline>Einkaufswagen</ShoppingItemsHeadline>
      <ShoppingItems>
        {cartItems.map(item => (
          <ShoppingItem
            key={item.id}
            name={item.name}
            image={item.image}
            onClick={() => handleItemRemove(item)}
          />
        ))}
      </ShoppingItems>
      <Cards
        categories={categories}
        shoppingItems={shoppingItems}
        onItemSelect={handleItemSelect}
      />
    </ShoppingPage>
  );
}
export default Shopping;
