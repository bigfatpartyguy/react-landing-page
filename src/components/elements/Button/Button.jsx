/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import classNames from 'classnames';

// eslint-disable-next-line react/prop-types
const Button = ({className, disabled, icon, type, onClick, children}) => {
  let iconContainer;
  if (icon || Array.isArray(children)) {
    iconContainer = (
      <span className={styles['icon-container']}>{icon || children[0]}</span>
    );
  }
  const classnames = classNames(
    ...className.split(' ').map(name => styles[name])
  );
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={classnames}
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
