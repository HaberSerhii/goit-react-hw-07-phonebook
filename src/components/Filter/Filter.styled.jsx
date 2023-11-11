import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FilterLabel = styled.label`
  color: white;
  font-weight: 600;
`;

export const FilterInput = styled.input`
  width: 300px;
  color: black;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px 20px;
  &:focus {
    border: 1px solid white;
  }
  &::placeholder {
    color: white;
  }
`;
