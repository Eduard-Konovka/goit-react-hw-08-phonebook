import { Component } from 'react';
// import shortid from 'shortid';
import Container from './components/Container';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
// import Filter from './components/Filter';
// import ContactList from './components/ContactList';
import './App.css';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Container title="Phonebook">
        <Section>
          <ContactForm />
        </Section>

        <Section title="Contacts">
          {/* <Filter /> */}
          {/* <ContactList /> */}
        </Section>
      </Container>
    );
  }
}
