import React from 'react';

// TODO All the info as props or fetched from store directly by photoId
const Thumbnail: React.FC<{photoId: string, thumb: string, alt: string}> = ({ photoId, thumb, alt }) => {
  return (
    <img src={thumb} alt={alt} />
  );
}

export default Thumbnail;