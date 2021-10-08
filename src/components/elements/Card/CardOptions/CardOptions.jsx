import React from 'react';
import Button from '../../Button';
import {ReactComponent as ShareIcon} from '../../../../assets/images/Share.svg';
import {ReactComponent as DownloadIcon} from '../../../../assets/images/Download.svg';
import {ReactComponent as DeleteIcon} from '../../../../assets/images/Delete.svg';
import styles from './CardOptions.module.scss';

const CardOptions = ({handleShare, handleDownload, handleDelete, position}) => {
  return (
    <div
      className={styles[`card-options${position === 'left' ? '_left' : ''}`]}>
      <Button className="btn-icon-text light-text" type="text">
        <ShareIcon />
        Share
      </Button>
      <Button className="btn-icon-text light-text" type="text">
        <DownloadIcon />
        Download as .zip
      </Button>
      <Button
        className="btn-icon-text light-text"
        type="text"
        onClick={handleDelete}>
        <DeleteIcon />
        Delete
      </Button>
    </div>
  );
};

export default CardOptions;
