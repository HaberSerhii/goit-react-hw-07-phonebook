import { useDispatch, useSelector } from 'react-redux';
import { Container } from './App.syled';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactsList } from '../ContactsList/ContactsList';
import { useEffect } from 'react';
import { contactsOperations } from '../../redux';

import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contactsSelectors';
import { Error } from '../Error/Error';
import { Loader } from '../Loading/Loading';

export function App() {
  const dispatch = useDispatch();
  const { fetchContacts } = contactsOperations;

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, fetchContacts]);

  return (
    <Container>
      <h1>Телефона книга</h1>
      <ContactsForm />
      <h2>Контакти</h2>
      <Filter />
      {contacts.length !== 0 && <ContactsList />}
      {error && <Error text={'Щось пішло не так, оновіть сторінку.'} />}
      {isLoading && <Loader />}
    </Container>
  );
}
