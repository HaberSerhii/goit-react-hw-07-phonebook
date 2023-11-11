import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { Contact } from '../Contact/Contact';
import { deleteContact } from '../../redux/contactsSlice';
import { ContactsAddedList } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const normalizedFilter = filterValue.toLowerCase();
  const getVisibleContacts = contacts.filter(
    ({ name }) =>
      typeof name === 'string' && name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ContactsAddedList>
      {getVisibleContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          id={id}
          deleteContact={() => dispatch(deleteContact(id))}
        />
      ))}
    </ContactsAddedList>
  );
};
