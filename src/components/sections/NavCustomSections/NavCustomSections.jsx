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
import '../../../assets/images/Circle.svg';

const NavMain = () => (
  <NavSection title="Main">
    <Button type="text" icon={<Image src={fileLogo} alt="file icon" />}>
      Files
    </Button>
    <Button type="text" icon={<Image src={photoIcon} alt="photo icon" />}>
      Photos
    </Button>
    <Button type="text" icon={<Image src={sharingIcon} alt="sharing icon" />}>
      Sharing
    </Button>
    <Button type="text" icon={<Image src={linkIcon} alt="links icon" />}>
      Links
    </Button>
    <Button type="text" icon={<Image src={calendarIcon} alt="calendar icon" />}>
      Events
    </Button>
  </NavSection>
);

const NavAlso = () => (
  <NavSection title="Also from Dropbox">
    <Button type="text" icon={<Image src={carouselIcon} alt="carousel icon" />}>
      Carousel
    </Button>
    <Button type="text" icon={<Image src={mailboxIcon} alt="mailbox icon" />}>
      Mailbox
    </Button>
  </NavSection>
);

const NavLabels = () => {
  const labelIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13">
      <g>
        <g>
          <path
            fill="#fe5151"
            d="M6.5 0a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zM1.53 6.5a4.97 4.97 0 1 0 9.94 0 4.97 4.97 0 0 0-9.94 0zM4 5V4h5v1zm0 2V6h3v1zm0 2V8h5v1z"
          />
        </g>
      </g>
    </svg>
  );
  return (
    <NavSection className="nav-section__labels" title="Labels">
      <Button type="text" icon={labelIcon}>
        Design
      </Button>
      <Button type="text" icon={labelIcon}>
        Web Elements
      </Button>
      <Button type="text" icon={labelIcon}>
        Mobile
      </Button>
      <Button type="text" icon={labelIcon}>
        Application
      </Button>
      <Button type="text" icon={labelIcon}>
        UI/UX
      </Button>
    </NavSection>
  );
};

export {NavMain, NavAlso, NavLabels};
