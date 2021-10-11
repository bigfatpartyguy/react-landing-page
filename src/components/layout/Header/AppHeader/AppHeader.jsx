import React from 'react';
import Header from '../Header';
import Button from '../../../elements/Button';
import Input from '../../../elements/Input';
import styles from './AppHeader.module.scss';

const AppHeader = ({searchStr, handleSearchStr}) => (
  <Header theme="dark">
    <Input
      className="search-input"
      type="search"
      placeholder="Type to search..."
      value={searchStr}
      onChange={handleSearchStr}
    />
  </Header>
);

export default AppHeader;
