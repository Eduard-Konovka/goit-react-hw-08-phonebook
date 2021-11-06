import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    forSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
  };

  hendleChenge = e => this.setState({ name: e.currentTarget.value });

  hendleSubmite = e => {
    e.preventDefault();
    this.props.forSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
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
            value={this.state.name}
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
