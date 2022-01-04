import spinnerImage from './globalSpinner.gif';
import s from './GlobalSpinner.module.css';

export default function GlobalSpinner() {
  return (
    <div className={s.box}>
      <img src={spinnerImage} alt="Spinner" />
    </div>
  );
}
