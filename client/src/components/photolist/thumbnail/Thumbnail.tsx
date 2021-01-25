import React from 'react';
import './Thumbnail.scss';

const Thumbnail: React.FC<{ thumbUrl: string, alt: string }> = ({ thumbUrl, alt }) => {
  return (
    <img src={thumbUrl} alt={alt} className='thumbnail'/>
  );
};

export default Thumbnail;
