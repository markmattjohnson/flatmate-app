import styled from "styled-components";

export const TodoPage = styled.div`
  background: white;
  padding: 30px;
  height: 100vh;

  @media (min-width: 767px) {
    margin-top: 60px;
  }
  @media (min-width: 1023px) {
    margin-top: 120px;
  }
`;

export const TodoList = styled.div`
  background: #72beb2;
  border-radius: 4px;
  padding: 5px;
`;

export const Todos = styled.div`
  background: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  padding: 10px 10px;
  font-size: 12px;
  margin-bottom: 6px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1023px) {
    font-size: 20px;
  }
`;
