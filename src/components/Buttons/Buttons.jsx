// import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './Buttons.module.css';

const Buttons = ({options, onLeaveFeedback }) => {
  return (
    <ul className={s.list}>
      {options.map(option => (
        <li key={shortid.generate()} className={s.item}>
          <button
            type="button"
            className={s.btn}
            onClick={() => onLeaveFeedback(option)}
          >
            {option.charAt(0).toUpperCase() + option.substring(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

// Buttons.propTypes = {
//   options: PropTypes.oneOf(['good', 'neutral', 'bad']).isRequired,
// };

export default Buttons;