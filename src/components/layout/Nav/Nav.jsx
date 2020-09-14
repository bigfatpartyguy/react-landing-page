/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Nav.module.scss';

const Nav = ({children}) => <nav className={styles.nav}>{children}</nav>;

export default Nav;
