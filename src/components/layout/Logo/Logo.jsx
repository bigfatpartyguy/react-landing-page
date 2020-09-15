import React from 'react';
import {Link} from 'react-router-dom';
import Image from '../../elements/Image';
import logo from '../../../assets/images/logo.svg';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <Image src={logo} alt="logo" width={52} height={48} />
      </Link>
    </div>
  );
};

export default Logo;
