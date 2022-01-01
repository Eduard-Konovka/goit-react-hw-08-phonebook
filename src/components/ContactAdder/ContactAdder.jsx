import IconButton from 'components/IconButton';
import { ReactComponent as AddIcon } from 'icons/add.svg';
import s from './ContactAdder.module.css';

const iconStyles = {
  marginTop: 20,
  marginBottom: 20,
};

export default function ContactAdder({ forClick }) {
  return (
    <div className={s.adder}>
      <p className={s.item}>
        <span className={s.description}>Add</span>
        <span className={s.accent}>YOUR</span>
        <span className={s.description}>contacts</span>
      </p>
      <IconButton
        type="button"
        title="Add contact"
        style={iconStyles}
        onClick={forClick}
        aria-label="Add contact"
      >
        <AddIcon width="36" height="36" fill="#fff" />
      </IconButton>
    </div>
  );
}
