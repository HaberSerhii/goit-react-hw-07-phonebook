import { useDispatch } from 'react-redux';
import {
  ItemContainer,
  ItemDelete,
  ItemText,
  ListItem,
} from './Contact.styled';
import { deleteContact } from '../../redux/contactsOperations';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, phone, id } = contact;

  const handleDeleteContact = () => dispatch(deleteContact(id));
  return (
    <ListItem>
      <ItemContainer>
        <ItemText>{name}</ItemText>
        <ItemText>{phone}</ItemText>
        <ItemDelete type="button" onClick={handleDeleteContact}>
          Видалити
        </ItemDelete>
      </ItemContainer>
    </ListItem>
  );
};

export default Contact;
