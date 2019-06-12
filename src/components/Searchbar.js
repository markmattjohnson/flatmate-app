import React, { useState } from "react";
import styled from "styled-components";
import ShoppingItem from "./ShoppingItem";

const SearchInput = styled.input`
  padding: 5px;
  border: 1px solid rgb(64, 165, 219);
  font-size: 18px;
  outline: none;
`;

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-bottom: 10px;
`;

function Searchbar({ shoppingItems, onItemSelect }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = event => {
    const value = event.target.value;
    console.log(value);
    setSearchValue(value);
  };

  function filterItems() {
    console.log("filter");
    return shoppingItems.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const filteredItems = searchValue ? filterItems() : [];
  console.log(filteredItems);

  function onShoppinItemClick(item) {
    onItemSelect(item);
    setSearchValue("");
  }

  return (
    <form className="app" id="searchForm">
      <SearchInput
        type="search"
        placeholder="Search..."
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
    </form>
  );
}

export default Searchbar;
