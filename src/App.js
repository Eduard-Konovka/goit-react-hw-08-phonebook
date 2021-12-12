import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLoading } from 'redux/contacts/contacts-selector';
import contactsOperations from 'redux/contacts/contacts-operations';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Spinner from 'components/Spinner/Spinner';
import 'App.css';

export default function App() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container title="Phonebook">
      <Section>
        <ContactForm />
      </Section>

      {isLoadingContacts && <Spinner size={100} />}

      {!isLoadingContacts && (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      )}
    </Container>
  );
}
