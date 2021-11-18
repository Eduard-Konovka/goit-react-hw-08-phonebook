import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactList({ contacts, forDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.item}>
          <p className={s.text}>{`${contact.name}: ${contact.number}`}</p>
          <button
            type="button"
            className={s.btn}
            onClick={() => forDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  forDeleteContact: PropTypes.func.isRequired,
};
