import styled from "styled-components";
import { NavLink as RRDNavlink } from "react-router-dom";

const NavLink = styled(RRDNavlink)`
  display: flex;
  flex: wrap;
  width: 150px;
  height: 50px;
  margin-bottom: 10px;
  justify-content: space-evenly;
  color: rgb(64, 165, 219);
  border: 1px solid rgb(64, 165, 219);
  border-radius: 5px;
  text-decoration: none;
  z-index: 0;
  background: white;

  &.active {
    background: rgb(64, 165, 219);
    color: white;
  }
`;

export default NavLink;
