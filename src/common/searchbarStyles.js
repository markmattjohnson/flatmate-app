import styled from "styled-components";

export const Form = styled.form`
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

export const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #72beb2;
  border-radius: 5px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  outline: none;
`;

export const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: 12px;
`;
