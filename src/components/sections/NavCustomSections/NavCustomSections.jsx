import React from 'react';
import NavSection from '../NavSection';
import Button from '../../elements/Button';
import Image from '../../elements/Image';
import fileLogo from '../../../assets/images/File_Icon.png';
import photoIcon from '../../../assets/images/Photo_Icon.png';
import sharingIcon from '../../../assets/images/Share_Icon.png';
import linkIcon from '../../../assets/images/Link_Icon.svg';
import calendarIcon from '../../../assets/images/Calendar_Icon.png';
import carouselIcon from '../../../assets/images/Carousel_Icon.png';
import mailboxIcon from '../../../assets/images/Mailbox_Icon.svg';
import {ReactComponent as LabelIcon} from '../../../assets/images/Circle.svg';
import styles from './NavCustomSections.module.scss';

const NavMain = () => (
  <NavSection title="Main" itemsSpacing="12px">
    <Button
      className="btn-icon-text"
      type="text"
      icon={<Image src={fileLogo} alt="file icon" />}>
      Files
    </Button>
    <Button
      className="btn-icon-text"
      type="text"
      icon={<Image src={photoIcon} alt="photo icon" />}>
      Photos
    </Button>
    <Button
      className="btn-icon-text"
      type="text"
      icon={<Image src={sharingIcon} alt="sharing icon" />}>
      Sharing
    </Button>
    <Button
      className="btn-icon-text"
      type="text"
      icon={<Image src={linkIcon} alt="links icon" />}>
      Links
    </Button>
    <Button
      className="btn-icon-text"
      type="text"
      icon={<Image src={calendarIcon} alt="calendar icon" />}>
      Events
    </Button>
  </NavSection>
);

const NavAlso = () => (
  <NavSection title="Also from Dropbox" itemsSpacing="6px">
    <Button
      className="btn-icon-text"
      type="text"
      icon={<Image src={carouselIcon} alt="carousel icon" />}>
      Carousel
    </Button>
    <Button
      className="btn-icon-text"
      type="text"
      icon={<Image src={mailboxIcon} alt="mailbox icon" />}>
      Mailbox
    </Button>
  </NavSection>
);

const NavLabels = () => (
  <NavSection title="Labels">
    <Button className="btn-icon-text" type="text">
      <LabelIcon className={styles['label--color1']} />
      Design
    </Button>
    <Button className="btn-icon-text" type="text">
      <LabelIcon className={styles['label--color2']} />
      Web Elements
    </Button>
    <Button className="btn-icon-text" type="text">
      <LabelIcon className={styles['label--color3']} />
      Mobile
    </Button>
    <Button className="btn-icon-text" type="text">
      <LabelIcon className={styles['label--color4']} />
      Application
    </Button>
    <Button className="btn-icon-text" type="text">
      <LabelIcon className={styles['label--color5']} />
      UI/UX
    </Button>
  </NavSection>
);

export {NavMain, NavAlso, NavLabels};
