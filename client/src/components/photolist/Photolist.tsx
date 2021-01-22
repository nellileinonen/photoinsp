import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from '../../redux/photolistSlice';
import { RootState } from '../../redux/rootReducer';

import { Link } from 'react-router-dom';

import Thumbnail from './Thumbnail';
import ShowMore from './ShowMore';

const Photolist: React.FC = () => {
  const dispatch = useDispatch();
  
  const photos = useSelector((state: RootState) => state.photolist.photolist);
  const photosStatus = useSelector((state: RootState) => state.photolist.status);
  const pageNumber = useSelector((state: RootState) => state.photolist.page);
  const error = useSelector((state: RootState) => state.photolist.error);

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
      {photos.map((photo: any) =>
      <Link
        key={photo.photoId}
        to={{pathname: `/photos/${photo.photoId}`}}
      >
        <Thumbnail photoId={photo.photoId} thumbUrl={photo.thumbUrl} alt={photo.alt} />
      </Link>
      )}

      {photosStatus === 'loading' &&
      <div>
        Loading...
      </div>}

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
