import React from 'react';
import styles from './Link.module.scss';

const Link = ({children}) => {
  return (
    <a href="/">
      {children}
    </a>
  );
};

export default Link;