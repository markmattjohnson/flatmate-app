import React, { useState } from "react";
import ShoppingItem from "./ShoppingItem";
import { Form, SearchInput, Grid } from "../common/searchbarStyles";

function Searchbar({ shoppingItems, onItemSelect }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = event => {
    const value = event.target.value;
    setSearchValue(value);
  };

  function filterItems() {
    return shoppingItems.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const filteredItems = searchValue ? filterItems() : [];

  function onShoppinItemClick(item) {
    onItemSelect(item);
    setSearchValue("");
  }

  return (
    <Form className="app" id="searchForm">
      <SearchInput
        type="search"
        placeholder="Suche..."
        onChange={handleSearchChange}
        value={searchValue}
      />
      <Grid>
        {filteredItems.map(item => (
          <ShoppingItem
            key={item.id}
            text={item.name}
            image={item.image}
            onClick={() => onShoppinItemClick(item)}
          />
        ))}
      </Grid>
    </Form>
  );
}

export default Searchbar;
