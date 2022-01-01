import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import { contactsOperations } from 'redux/contacts';
import Button from 'components/Button';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const forDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{`${name}: ${number}`}</p>
          <Button type="button" onClick={() => forDeleteContact(id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}
