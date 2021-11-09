import PropTypes from "prop-types";

const Button = ({ onClick, children }) => (
  <div>
    <button className="button" onClick={onClick}>
      {children}
    </button>
  </div>
);
button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export default Button;
