import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = ({image, filename, meta}) => (
  <div className={styles.card}>
    <div className={styles.card__image}>{image}</div>
    <div className={styles.card__data}>
      <p className={styles.card__filename}>{filename}</p>
      <div className={styles.card__footer}>
        <span className={styles.card__meta}>{meta}</span>
        <div
          tabIndex="0"
          role="button"
          aria-label="options"
          clasName={styles['card__options-button']}
        />
      </div>
    </div>
  </div>
);

export default Card;