import React from 'react';
import Logo from '../partials/Logo';
import Button from '../../elements/Button';
import Image from '../../elements/Image';
import file from '../../../assets/images/File_Icon.png';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles['header-main']}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <h2>header</h2>
      <Button type="text" icon={<Image src={file} alt="file" />}>
        Button
      </Button>
    </header>
  );
};

export default Header;
