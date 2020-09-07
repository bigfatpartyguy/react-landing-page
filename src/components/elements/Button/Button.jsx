import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import styles from './Button.module.scss';

// eslint-disable-next-line react/prop-types
const Button = ({className, disabled, icon, type, onClick, children}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={styles[className]}
      disabled={disabled}
      type={type}
      onClick={onClick}>
      {icon || ''}
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};
export default Button;
