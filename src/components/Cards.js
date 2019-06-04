import React from "react";
import Card from "./Card";

const Cards = ({ shoppingItems, categories, onItemSelect }) => {
  function getShoppingItemsByCategory(category) {
    return shoppingItems.filter(item => item.category === category.name);
  }

  return (
    <div>
      {categories.map(category => (
        <Card
          key={category.id}
          category={category}
          shoppingItems={getShoppingItemsByCategory(category)}
          onItemSelect={onItemSelect}
        />
      ))}
    </div>
  );
};

export default Cards;
