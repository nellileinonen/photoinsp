import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from '../../redux/photosSlice';
import { RootState } from '../../redux/rootReducer';

import { Link, useLocation } from 'react-router-dom';

import Thumbnail from './Thumbnail';
import ShowMore from './ShowMore';

const Photolist: React.FC = () => {
  const dispatch = useDispatch();
  
  const photos = useSelector((state: RootState) => state.photos.photos);
  const photosStatus = useSelector((state: RootState) => state.photos.status);
  const pageNumber = useSelector((state: RootState) => state.photos.page);
  const error = useSelector((state: RootState) => state.photos.error);

  let location = useLocation();

  useEffect(() => {
    // Only fetch initial list of photos once
    if (photosStatus === 'idle') {
      dispatch(fetchPhotos(pageNumber));
    }
  }, [photosStatus, pageNumber, dispatch]);

  // Dispatch action to fetch photos
  const handleShowMore = () => {
    dispatch(fetchPhotos(pageNumber));
  }

  return (
    <div>

      {photosStatus === 'loading' &&
      <div>
        Loading...
      </div>}

      {photos.map((photo: any) =>
      <Link
        key={photo.photoId}
        to={{
          pathname: `/photo/${photo.photoId}`,
          state: { background: location }
        }}
      >
        <Thumbnail photoId={photo.photoId} thumbUrl={photo.thumbUrl} alt={photo.alt} />
      </Link>)}

      {photosStatus === 'succeeded' &&
      <ShowMore handleShowMore={handleShowMore} />}

      {photosStatus === 'failed' &&
      <div>
        {error}
      </div>}

    </div>
  );
}

export default Photolist;
