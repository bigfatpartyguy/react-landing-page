import React from 'react';
import Nav from '../Nav';
import Logo from '../../Logo';
import {NavMain, NavAlso, NavLabels} from '../../../sections/NavCustomSections';
import ProgressBar from '../../../elements/ProgressBar';
import styles from './CustomNav.module.scss';

const CustomNav = () => (
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
      <ProgressBar
        id="progress-storage"
        max="2"
        value="1.2"
        labelText="%value gb of %max gb is used"
      />
    </section>
  </Nav>
);

export default CustomNav;
