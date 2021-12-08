import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'store/contacts/contacts-selector';
import contactsActions from 'store/contacts/contacts-actions';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const forDeleteContact = id => dispatch(contactsActions.deleteContact(id));

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
