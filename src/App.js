import Container from './components/Container/Container';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import './App.css';

export default function App() {
  return (
    <Container title="Phonebook">
      <Section>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}
