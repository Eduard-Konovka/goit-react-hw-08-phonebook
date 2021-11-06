import { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
// import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = ({ name }) => {
    const { contacts } = this.state;
    const contact = {
      name,
      id: shortid.generate(),
    };

    this.setState({ contacts: [...contacts, contact] });
  };

  render() {
    const { contacts } = this.state;
    const submitHandler = this.formSubmitHandler;

    return (
      <Container title="Phonebook">
        <Section>
          <ContactForm forSubmit={submitHandler} />
        </Section>

        <Section title="Contacts">
          {/* <Filter /> */}
          <ContactList contacts={contacts} />
        </Section>
      </Container>
    );
  }
}

export default App;
