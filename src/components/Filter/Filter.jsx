import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'store/contacts/contacts-selector';
import contactsActions from 'store/contacts/contacts-actions';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.filter}>
      Find contacts by name:
      <input
        type="text"
        value={value}
        className={s.input}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </label>
  );
}
