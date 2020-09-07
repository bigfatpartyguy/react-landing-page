import React from 'react';
import styles from './Image.module.scss';

// eslint-disable-next-line react/prop-types
const Image = ({src, alt, width, height, className}) => {
  console.log(src);
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default Image;
