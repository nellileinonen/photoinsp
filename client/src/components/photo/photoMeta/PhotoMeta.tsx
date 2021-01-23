import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';
import './PhotoMeta.scss';

const PhotoMeta: React.FC = () => {
  const createdAt = useSelector((state: RootState) => state.photo.photo.createdAt);
  const fullUrl = useSelector((state: RootState) => state.photo.photo.fullUrl);

  return (
    <div className='photo-meta'>
      {createdAt}
      <br/>
      <a href={fullUrl} target='_blank' rel='noreferrer'>Full-sized</a>
    </div>
  );
};

export default PhotoMeta;