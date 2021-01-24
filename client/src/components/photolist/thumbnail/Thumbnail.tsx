import React from 'react';

import './Thumbnail.scss';

// TODO All the info as props or fetched from store directly by photoId
const Thumbnail: React.FC<{photoId: string, thumbUrl: string, alt: string}>
  = ({ photoId, thumbUrl, alt }) => {
  return (
    <img src={thumbUrl} alt={alt} className='thumbnail'/>
  );
};

export default Thumbnail;