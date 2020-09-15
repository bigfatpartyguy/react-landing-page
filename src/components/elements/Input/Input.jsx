/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import styles from './Input.module.scss';

const Input = ({className, name, placeholder, type}) => {
  const [value, setValue] = useState('');
  return (
    <input
      onChange={e => setValue(e.target.value)}
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
