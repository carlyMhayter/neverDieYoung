import PropTypes from 'prop-types';
import styles from '../styles/component-styles/Button.module.scss';

const Button = ({ onClick, children }) => (
  <div>
    <button className={styles.button} onClick={onClick} type="button">
      {children}
    </button>
  </div>
);
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export default Button;
