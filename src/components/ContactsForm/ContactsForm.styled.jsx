import { Form, Field } from 'formik';
import styled from 'styled-components';

export const ContanctForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContactLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: 600;
  gap: 10px;
`;

export const ContactInput = styled(Field)`
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

export const ContactErrorMessage = styled.div`
  font-weight: 600;
  color: yellow;
`;

export const AddButton = styled.button`
  max-width: 150px;
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
`;
