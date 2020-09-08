import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavSection.module.scss';

// eslint-disable-next-line react/prop-types
const NavSection = ({title, children}) => {
  return (
    <section className={styles['nav-section']}>
      <p className={styles['nav-section__title']}>{title}</p>
      {children && Array.isArray(children) ? (
        <ul className={styles['nav-section__link-block']}>
          {/* eslint-disable-next-line react/prop-types */}
          {children.map(child => (
            <li>{child}</li>
          ))}
        </ul>
      ) : (
        children
      )}
    </section>
  );
};

NavSection.propTypes = {
  title: PropTypes.string,
};

NavSection.defaultProps = {
  title: 'Title',
};

export default NavSection;
