import styled from "styled-components";
import { NavLink as RRDNavlink } from "react-router-dom";

const NavLink = styled(RRDNavlink)`
  display: flex;
  flex: wrap;
  width: 150px;
  height: 50px;
  margin-bottom: 10px;
  justify-content: space-evenly;
  color: #72beb2;
  border: 1px solid #72beb2;
  border-radius: 5px;
  text-decoration: none;
  z-index: 0;
  background: white;

  &.active {
    background: #72beb2;
    color: white;
  }
`;

export default NavLink;
