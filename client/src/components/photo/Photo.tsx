import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPhoto } from '../../redux/photoSlice';
import { RootState } from '../../redux/rootReducer';

import { LoadingOutlined } from '@ant-design/icons';

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
    <div>
      {photoStatus === 'loading' &&
      <LoadingOutlined className='loading'/>}

      {photoStatus === 'succeeded' &&
      <>
        <img src={photo.regularUrl} alt={photo.alt} className='regular-photo'/>
        <div>
          <div className='photo-info'>
            <p>{photo.createdAt}
            <a href={photo.fullUrl} target='_blank' rel='noreferrer'>Full-sized</a></p>

            <div className='user-info'>
              <p><img src={photo.userImgUrl} alt='' className='user-img'/>
              {photo.userRealName}<br/>{photo.username}</p>
            </div>

          </div>
        </div>
      </>}

      {photoStatus === 'failed' &&
      <div className='error'>{error}</div>}
    </div>
  );
}

export default Photo;