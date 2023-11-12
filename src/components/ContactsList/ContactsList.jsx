import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { ContactsAddedList } from './ContactsList.styled';
import { selectVisibleContacts } from '../../redux/contactsSelectors';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ContactsAddedList>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ContactsAddedList>
  );
};
