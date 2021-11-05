import { Component } from 'react';
// import PropTypes from 'prop-types'
import s from './ContactForm.module.css';

class ContactForm extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div className={s.box}>
        <h3 className={s.title}>Name</h3>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={s.input}
        />
        <button className={s.btn}>Add contact</button>
      </div>
    );
  }
}

export default ContactForm;
