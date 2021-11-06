import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    forSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  hendleChenge = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  hendleSubmite = e => {
    e.preventDefault();
    this.props.forSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const toChenge = this.hendleChenge;
    const toSubmite = this.hendleSubmite;

    return (
      <form onSubmit={toSubmite} className={s.form}>
        <label className={s.label}>
          <p className={s.title}>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={toChenge}
            className={s.input}
          />

          <p className={s.title}>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={toChenge}
            className={s.input}
          />

          <button className={s.btn}>Add contact</button>
        </label>
      </form>
    );
  }
}

export default ContactForm;
