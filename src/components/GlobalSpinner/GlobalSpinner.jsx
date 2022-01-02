// import { ImSpinner } from 'react-icons/im';
import spinnerImage from './globalSpinner.gif';
import PropTypes from 'prop-types';
import s from './GlobalSpinner.module.css';

export default function Spinner({ size }) {
  return (
    <div className={s.box}>
      <img src={spinnerImage} class={{ wight: 20 }} alt="Spinner" />
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.number.isRequired,
};
