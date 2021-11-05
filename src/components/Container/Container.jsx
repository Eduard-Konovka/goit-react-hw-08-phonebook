import PropTypes from 'prop-types';
import s from './Container.module.css';

function Container({ title, children }) {
  return (
    <section className={s.container}>
      {title && <h1 className={s.title}>{title}</h1>}
      {children}
    </section>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
