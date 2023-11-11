import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { Container } from './App.syled';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactsList } from '../ContactsList/ContactsList';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <h1>Телефона книга</h1>
      <ContactsForm />
      <h2>Контакти</h2>
      <Filter />
      {contacts.length !== 0 && <ContactsList />}
    </Container>
  );
}
