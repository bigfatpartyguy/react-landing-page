import React from 'react';
import styles from './Header.module.scss';

const Header = ({className, children}) => {
  const classes = `${styles.header} ${
    className
      ? className
          // eslint-disable-next-line react/prop-types
          .split(' ')
          .map(cl => styles[cl])
          .join(' ')
      : ''
  }`;
  return <header className={classes}>{children || ''}</header>;
};

export default Header;
