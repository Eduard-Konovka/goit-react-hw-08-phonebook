import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, forChange }) => (
  <label className={s.filter}>
    Find contacts by name:
    <input type="text" value={value} className={s.input} onChange={forChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  forChange: PropTypes.func.isRequired,
};

export default Filter;
