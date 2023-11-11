import {
  ItemContainer,
  ItemDelete,
  ItemText,
  ListItem,
} from './Contact.styled';

export const Contact = ({ name, number, deleteContact }) => {
  return (
    <ListItem>
      <ItemContainer>
        <ItemText>{name}</ItemText>
        <ItemText>{number}</ItemText>
        <ItemDelete type="button" onClick={deleteContact}>
          Видалити
        </ItemDelete>
      </ItemContainer>
    </ListItem>
  );
};
