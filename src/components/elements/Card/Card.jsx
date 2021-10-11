import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as OptIcon} from '../../../assets/images/Opt_Icon.svg';
import CardOptions from './CardOptions';
import Image from '../Image';
import styles from './Card.module.scss';

const Card = ({cardInfo, fluid, handleSelectDeselect, handleDelete}) => {
  const {filename, img, date, size: filesize, selected, id} = cardInfo;
  const [optOpen, setOptOpen] = useState(false);
  const [optMenuPosition, setOptMenuPosition] = useState('right');
  const [cardHover, setCardHover] = useState(false);
  const classes = classNames(
    styles[`card${cardHover ? '_hover' : ''}`],
    fluid && styles['card_fluid'],
    selected && styles['card_selected']
  );
  const onClick = e => {
    handleSelectDeselect(id);
  };

  const handleOptionsClick = e => {
    e.stopPropagation();
    const optButtonCoords = e.target.getBoundingClientRect();
    const windowWidth = document.documentElement.clientWidth;

    setOptMenuPosition(prev => {
      if (windowWidth - optButtonCoords.right < 250) {
        return 'left';
      }
      return 'right';
    });

    setOptOpen(prev => !prev);
  };

  const handleCardMouseEnter = () => {
    setCardHover(true);
  };

  const handleCardMouseLeave = () => {
    setCardHover(false);
  };

  const handleOptBtnMouseEnter = () => {
    setCardHover(false);
  };

  const handleOptBtnMouseLeave = () => {
    setCardHover(true);
    setOptOpen(false);
  };

  return (
    <div
      className={classes}
      role="checkbox"
      aria-checked={selected}
      tabIndex="0"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
      onDragStart={e => e.preventDefault()}
      onMouseDown={e => e.preventDefault()}
      onClick={onClick}
      onKeyPress={onClick}>
      <div className={styles.card__image}>
        <Image src={img} />
      </div>
      <div className={styles.card__info}>
        <p className={styles.card__filename}>{filename}</p>
        <div className={styles.card__info__footer}>
          <span className={styles.card__meta}>{`${date}, ${filesize}`}</span>
          <div
            onMouseEnter={handleOptBtnMouseEnter}
            onMouseLeave={handleOptBtnMouseLeave}
            onClick={handleOptionsClick}
            tabIndex="0"
            role="button"
            aria-label="options"
            className={styles['card__options-button']}>
            <OptIcon className={styles.options__icon} />
            {optOpen && (
              <CardOptions
                position={optMenuPosition}
                handleDelete={() => handleDelete(id)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  /* This function decides if the component
  needs to be rerendered.
  */
  let falseCounter = 0;
  for (let key in prevProps) {
    // I know it isn't right, but...
    // just skip handler functions
    if (typeof prevProps[key] === 'function') {
      continue;
    }
    falseCounter += Object.is(prevProps[key], nextProps[key]) ? 0 : 1;
  }
  return !falseCounter;
};

export default React.memo(Card, areEqual);
