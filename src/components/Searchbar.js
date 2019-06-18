import React, { useState } from "react";
import styled from "styled-components";
import ShoppingItem from "./ShoppingItem";

const Form = styled.form`
  @media (max-width: 374px) {
    margin: 0 10px 0 10px;
  }
  @media (min-width: 375px) and (max-width: 499px) {
    margin: 10px 10px 0 10px;
  }
  @media (min-width: 500px) {
    margin: 50px 10px 0 10px;
  }
  @media (min-width: 767px) {
    margin: 80px 10px 0 10px;
  }
  @media (min-width: 1023px) {
    margin: 130px 10px 0 10px;
  }
  @media (min-width: 1025px) {
    margin: 150px 10px 0 10px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #72beb2;
  border-radius: 5px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
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
    </Form>
  );
}

export default Searchbar;
