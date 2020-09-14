/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ProgressBar.module.scss';

const ProgressBar = ({max, value, id, children}) => {
  return (
    <>
      {children && (
        <label className={styles['progress-bar__label']} htmlFor={id}>
          {children.replace(/%value/, value).replace(/%max/, max)}
        </label>
      )}
      <progress
        className={styles['progress-bar__bar']}
        id={id}
        max={max}
        value={value}
      />
    </>
  );
};

export default ProgressBar;
