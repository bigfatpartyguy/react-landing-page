import React from 'react';
import styles from './Input.module.scss';

const Input = () => {
  return (
    <input type="text" className={styles[className]} name={name} placeholder={placeholder} value={value}/>
  );
}