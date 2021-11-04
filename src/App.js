import { Component } from 'react';
// import PropTypes from 'prop-types';
// import shortid from 'shortid';
import Container from './components/Container';
import Section from './components/Section';
import ReviewsWidget from './components/ReviewsWidget';
import PhoneBook from './components/PhoneBook';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Section title="1. Виджет отзывов">
          <ReviewsWidget />
        </Section>

        <Section title="2. Телефонная книга">
          <PhoneBook />
        </Section>
      </Container>
    );
  }
}
