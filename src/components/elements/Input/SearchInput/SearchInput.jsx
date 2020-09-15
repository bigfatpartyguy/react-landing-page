import React from 'react';
import Input from '../Input';
import {ReactComponent as SearchIcon} from '../../../../assets/images/Search_Icon.svg';
import styles from './SearchInput.module.scss';

const SearchInput = ({placeholder}) => {
  return (
    <span className={styles['search-input__wrapper']}>
      <Input
        className="search-input"
        name="search-input"
        type="search"
        placeholder={placeholder}
      />
      <SearchIcon className={styles['search-input__icon']} />
    </span>
  );
};

export default SearchInput;
