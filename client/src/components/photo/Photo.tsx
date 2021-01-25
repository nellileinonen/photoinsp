import React, { useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhoto } from '../../redux/photoSlice';
import { RootState } from '../../redux/rootReducer';
import PhotoMeta from './photoMeta/PhotoMeta';
import PhotographerIntro from './photographerIntro/PhotographerIntro';
import './Photo.scss';

const Photo: React.FC<{photoId: string}> = ({ photoId }) => {
  const dispatch = useDispatch();

  const photo = useSelector((state: RootState) => state.photo.photo);
  const photoStatus = useSelector((state: RootState) => state.photo.status);
  const error = useSelector((state: RootState) => state.photo.error);

  useEffect(() => {
    dispatch(fetchPhoto(photoId));
  }, [dispatch, photoId]);

  return (
    <div className='photo-view'>

      {photoStatus === 'loading' &&
      <LoadingOutlined className='loading' />}

      {photoStatus === 'succeeded' &&
      (
      <>
        <img src={photo.regularUrl} alt={photo.alt} className='regular-photo' />
        <PhotoMeta />
        <PhotographerIntro />
      </>
      )}

      {photoStatus === 'failed' &&
      <div className='error'>{error}</div>}

    </div>
  );
};

export default Photo;
