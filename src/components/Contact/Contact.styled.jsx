import styled from 'styled-components';

export const ListItem = styled.li`
  list-style-type: none;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  border: 1px solid black;
  border-radius: 5px;
  width: 500px;
`;

export const ItemText = styled.p`
  color: white;
  font-size: large;
`;

export const ItemDelete = styled.button`
  padding: 5px 10px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: yellow;
    border-color: black;
  }
`;
