import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/contacts-actions';
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
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}
