import React, { useState } from "react";
import styled from "styled-components";
import ShoppingItem from "./ShoppingItem";

function Searchbar({ shoppingItems, onItemSelect }) {
  const [searchValue, setSearchValue] = useState("");

  const Grid = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    margin-bottom: 10px;
  `;

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

  function mySearchFunctionClear() {
    document.getElementById("searchForm").reset();
  }

  return (
    <form className="app" id="searchForm">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
        onClick="mySearchFunctionClear()"
      />
      <Grid>
        {filteredItems.map(item => (
          <ShoppingItem
            key={item.id}
            text={item.name}
            image={item.image}
            onClick={() =>
              onItemSelect(item, setSearchValue(), mySearchFunctionClear())
            }
          />
        ))}
      </Grid>
    </form>
  );
}

export default Searchbar;
