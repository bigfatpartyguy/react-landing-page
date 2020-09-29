import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Header.module.scss';

const Header = ({children, theme, size}) => {
  const classes = classNames(
    styles.header,
    theme && styles[theme],
    size && styles[size]
  );
  return <header className={classes}>{children}</header>;
};

export default Header;

Header.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string,
  size: PropTypes.string,
};

Header.defaultProps = {
  children: null,
  theme: 'header--dark',
  size: '',
};
