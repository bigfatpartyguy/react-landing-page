/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Input.module.scss';

const Input = ({className, name, placeholder, type, value, onChange}) => {
  return (
    <input
      onChange={onChange}
      type={type}
      className={styles[className]}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
