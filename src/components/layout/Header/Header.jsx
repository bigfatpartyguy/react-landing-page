import React from 'react';
import styles from './Header.module.scss';

const Header = ({children}) => {
  return <header className={styles['header-main']}>{children || ''}</header>;
};

export default Header;
