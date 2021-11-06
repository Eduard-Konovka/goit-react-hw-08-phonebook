import { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState({ contacts: [...contacts, contact] });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const submitHandler = this.formSubmitHandler;
    const changeFilter = this.changeFilter;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container title="Phonebook">
        <Section>
          <ContactForm forSubmit={submitHandler} />
        </Section>

        <Section title="Contacts">
          <Filter value={filter} onChange={changeFilter} />
          <ContactList contacts={visibleContacts} />
        </Section>
      </Container>
    );
  }
}

export default App;
