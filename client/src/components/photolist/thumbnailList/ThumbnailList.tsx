import React from 'react';
import { Link } from 'react-router-dom';
import { ThumbnailType } from '../../../redux/photolistSlice';
import Thumbnail from '../thumbnail/Thumbnail';
import './ThumbnailList.scss';

const ThumbnailList: React.FC<{ thumbnails: ThumbnailType[] }> = ({ thumbnails }) => {
  return (
    <div className='flex-container'>
      {thumbnails.map((photo: ThumbnailType) =>
      <Link
        key={photo.photoId}
        to={{ pathname: `/photos/${photo.photoId}` }}
        className='flex-item'
      >
        <Thumbnail thumbUrl={photo.thumbUrl} alt={photo.alt} />
      </Link>)}
    </div>
  );
};

export default ThumbnailList;
