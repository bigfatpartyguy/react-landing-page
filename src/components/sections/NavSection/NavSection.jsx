import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';
import styles from './NavSection.module.scss';

// eslint-disable-next-line react/prop-types
const NavSection = ({title, children, itemsSpacing}) => (
  <section className={styles['nav-section']}>
    <p className={styles['nav-section__title']}>{title}</p>
    {children && Array.isArray(children) ? (
      <ul className={styles['nav-section__link-block']}>
        {/* eslint-disable-next-line react/prop-types */}
        {children.map((child, i, arr) => (
          <li
            key={uuidv4()}
            style={i + 1 < arr.length ? {marginBottom: itemsSpacing} : {}}>
            {child}
          </li>
        ))}
      </ul>
    ) : (
      children
    )}
  </section>
);

NavSection.propTypes = {
  title: PropTypes.string,
};

NavSection.defaultProps = {
  title: 'Title',
};

export default NavSection;
