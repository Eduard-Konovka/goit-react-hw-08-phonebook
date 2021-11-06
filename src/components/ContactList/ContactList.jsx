import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.item}>
          {`${contact.name}: ${contact.number}`}
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
