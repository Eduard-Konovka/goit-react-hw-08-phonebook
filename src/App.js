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
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    parsedContacts && this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevState) {
    this.state.contacts !== prevState.contacts &&
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    contacts.map(contact => contact.name).includes(name)
      ? alert(`${name} is already in contacts.`)
      : this.setState({ contacts: [...contacts, contact] });
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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const submitHandler = this.formSubmitHandler;
    const changeFilter = this.changeFilter;
    const visibleContacts = this.getVisibleContacts();
    const deleteContact = this.deleteContact;

    return (
      <Container title="Phonebook">
        <Section>
          <ContactForm forSubmit={submitHandler} />
        </Section>

        <Section title="Contacts">
          <Filter value={filter} forChange={changeFilter} />
          <ContactList
            contacts={visibleContacts}
            forDeleteContact={deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
