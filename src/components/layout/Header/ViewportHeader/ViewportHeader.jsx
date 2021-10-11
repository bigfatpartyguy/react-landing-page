import React from 'react';
import Header from '../Header';
import Button from '../../../elements/Button';
import Image from '../../../elements/Image';
import uploadIcon from '../../../../assets/images/Upload_Icon.png';
import folderIcon from '../../../../assets/images/Folder_Icon.png';
import shareFolderIcon from '../../../../assets/images/Share_Folder_Icon.png';
import trashIcon from '../../../../assets/images/Trash_Icon.png';
import {ReactComponent as ThumbViewIcon} from '../../../../assets/images/Thumb_View.svg';
import {ReactComponent as ListViewIcon} from '../../../../assets/images/List_View.svg';
import {ReactComponent as DetailViewIcon} from '../../../../assets/images/Detail_View.svg';
import styles from './ViewportHeader.module.scss';

const ViewportHeader = ({count, layoutView, changeLayoutView}) => {
  return (
    <Header theme="light" size="slim">
      <div className={styles['viewport-header__container']}>
        <section className={styles['viewport-header__menu']}>
          <Button
            className="btn-icon-text"
            type="text"
            icon={<Image src={uploadIcon} alt="upload icon" />}>
            Upload
          </Button>
          <Button
            className="btn-icon-text"
            type="text"
            icon={<Image src={folderIcon} alt="folder icon" />}>
            New Folder
          </Button>
          <Button
            className="btn-icon-text"
            type="text"
            icon={<Image src={shareFolderIcon} alt="share a folder icon" />}>
            Share a Folder
          </Button>
          <Button
            className="btn-icon-text"
            type="text"
            icon={<Image src={trashIcon} alt="trash icon" />}>
            Trash
          </Button>
        </section>
        {count > 0 ? (
          <p className={styles['viewport-header__info']}>
            You have selected {count} items
          </p>
        ) : (
          ''
        )}
        <section className={styles['viewport-header__display-options']}>
          <Button
            className="btn-icon-text"
            onClick={() => changeLayoutView('thumb')}>
            <ThumbViewIcon
              className={
                styles[
                  `viewport-header__display-options__icon${
                    layoutView === 'thumb' ? '_active' : ''
                  }`
                ]
              }
            />
          </Button>
          <Button
            className="btn-icon-text"
            onClick={() => changeLayoutView('list')}>
            <ListViewIcon
              className={
                styles[
                  `viewport-header__display-options__icon${
                    layoutView === 'list' ? '_active' : ''
                  }`
                ]
              }
            />
          </Button>
          <Button
            className="btn-icon-text"
            onClick={() => changeLayoutView('detail')}>
            <DetailViewIcon
              className={
                styles[
                  `viewport-header__display-options__icon${
                    layoutView === 'detail' ? '_active' : ''
                  }`
                ]
              }
            />
          </Button>
        </section>
      </div>
    </Header>
  );
};

export default ViewportHeader;
