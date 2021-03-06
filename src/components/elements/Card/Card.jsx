import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as OptIcon} from '../../../assets/images/Opt_Icon.svg';
import styles from './Card.module.scss';

const Card = ({image, filename, date, filesize, fluid}) => {
  const [selected, setSelected] = useState(false);
  const classes = classNames(
    styles.card,
    fluid && styles['card--fluid'],
    selected && styles['card--selected']
  );
  const onClick = e => {
    setSelected(!selected);
  };
  return (
    <div
      className={classes}
      role="checkbox"
      aria-checked={selected}
      tabIndex="0"
      onDragStart={e => e.preventDefault()}
      onMouseDown={e => e.preventDefault()}
      onClick={onClick}
      onKeyPress={onClick}>
      <div className={styles.card__image}>{image}</div>
      <div className={styles.card__info}>
        <p className={styles.card__filename}>{filename}</p>
        <div className={styles.card__info__footer}>
          <span className={styles.card__meta}>{`${date}, ${filesize}`}</span>
          <div
            tabIndex="0"
            role="button"
            aria-label="options"
            className={styles['card__options-button']}>
            <OptIcon className={styles.options__icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
