import React from 'react';
import Header from '../Header';
import Button from '../../../elements/Button';
import Input from '../../../elements/Input';
import styles from './AppHeader.module.scss';

const ViewportHeader = () => {
  return (
    <Header theme="dark">
      <Input
        className="search-input"
        type="search"
        placeholder="Type to search..."
      />
    </Header>
  );
};

export default ViewportHeader;
