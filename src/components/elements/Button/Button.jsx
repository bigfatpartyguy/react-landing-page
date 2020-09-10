/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

// eslint-disable-next-line react/prop-types
const Button = ({className, disabled, icon, type, onClick, children}) => {
  let iconContainer;
  if (icon || Array.isArray(children)) {
    iconContainer = (
      <span className={styles['btn-icon__icon-container']}>
        {icon || children[0]}
      </span>
    );
  }
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={styles[className]}
      disabled={disabled}
      type={type}
      onClick={onClick}>
      {Array.isArray(children) ? (
        <>
          {iconContainer}
          {children.slice(1)}
        </>
      ) : (
        <>
          {iconContainer || ''}
          {children}
        </>
      )}
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
