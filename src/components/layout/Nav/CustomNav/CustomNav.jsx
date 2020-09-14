import React from 'react';
import Nav from '../Nav';
import Logo from '../../partials/Logo';
import {NavMain, NavAlso, NavLabels} from '../../../sections/NavCustomSections';
import styles from './CustomNav.module.scss';

const CustomNav = () => {
  return (
    <Nav>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles['nav-panel']}>
        <NavMain />
        <NavAlso />
        <NavLabels />
      </div>
      <section className={styles['nav-footer']}>
        <p>1.2gb of 2gb is used</p>
      </section>
    </Nav>
  );
};

export default CustomNav;
