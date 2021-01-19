import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from '../../redux/photosSlice';
import { RootState } from '../../redux/rootReducer';

import Thumbnail from './Thumbnail';

const Photolist: React.FC = () => {
  const dispatch = useDispatch();
  
  const photos = useSelector((state: RootState) => state.photos.photos);
  const photosStatus = useSelector((state: RootState) => state.photos.status);
  const error = useSelector((state: RootState) => state.photos.error);

  useEffect(() => {
    // Only fetch initial list of photos once
    if (photosStatus === 'idle') {
      dispatch(fetchPhotos());
    }
  }, [photosStatus, dispatch]);

  let content;
  if (photosStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (photosStatus === 'succeeded') {
    console.log(photos);
    content = photos.map((photo: any) => (
      // TODO All the info as props or fetched from store in Thumbnail directly by photoId
      <Thumbnail key={photo.photoId} photoId={photo.photoId} thumb={photo.thumb} alt={photo.alt} />
    ));
  } else if (photosStatus === 'failed') {
    content = <div>{error}</div>;
  }

  // TODO fetch more photos
  const handleClick = () => {
    console.log('show me more photos');
  }

  return (
    <div>
      {content}
      <button onClick={() => handleClick()}>Show more</button>
    </div>
  );
}

export default Photolist;