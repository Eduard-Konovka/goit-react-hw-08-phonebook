import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'store/contacts/contacts-selector';
import contactsActions from 'store/contacts/contacts-actions';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const hendleChenge = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const hendleSubmite = e => {
    e.preventDefault();

    contacts.map(contact => contact.name).includes(name)
      ? alert(`${name} is already in contacts.`)
      : dispatch(contactsActions.addContact({ name, number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={hendleSubmite} className={s.form}>
      <label className={s.label}>
        <p className={s.title}>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={hendleChenge}
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
          onChange={hendleChenge}
          className={s.input}
        />

        <button className={s.btn}>Add contact</button>
      </label>
    </form>
  );
}
