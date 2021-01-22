import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPhoto } from '../../redux/photoSlice';
import { RootState } from '../../redux/rootReducer';

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
      {photoStatus === 'loading' && <p>Loading...</p>}

      {photoStatus === 'succeeded' &&
      <>
      <img src={photo.regularUrl} alt={photo.alt} width='500'/>
      <p>{photo.createdAt}</p>
      <p><a href={photo.fullUrl} target='_blank'>Full-size</a></p>
      <div>
        <img src={photo.userImgUrl} alt=''/>
        <p>{photo.userRealName}</p>
        <p>{photo.username}</p>
      </div>
      </>}

      {photoStatus === 'failed' && <div>{error}</div>}
    </div>
  );
}

export default Photo;