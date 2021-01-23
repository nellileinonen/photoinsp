import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from '../../redux/photolistSlice';
import { RootState } from '../../redux/rootReducer';

import { Link } from 'react-router-dom';

import Thumbnail from './thumbnail/Thumbnail';
import ShowMore from './showMore/ShowMore';

import { LoadingOutlined } from '@ant-design/icons';
import './Photolist.scss';

/*
 * Helper variable and function to create unique keys to photo thumbnails.
 * Photo id:s can't be used as keys because data in Unsplash updates often and
 * same photos can be fetched multiple times if the app is left open and after
 * some time the user continues browsing where they left
 */
let photoCount = 1;
const giveKey = () => {
  photoCount = photoCount + 1;
  return photoCount;
};

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
  };

  return (
    <div>
      <div className='flex-container'>
        {photos.map((photo: any) =>
        <Link
          key={giveKey()}
          to={{pathname: `/photos/${photo.photoId}`}}
          className='flex-item'
        >
          <Thumbnail photoId={photo.photoId} thumbUrl={photo.thumbUrl} alt={photo.alt} />
        </Link>
        )}
      </div>

      {photosStatus === 'loading' &&
      <LoadingOutlined className='loading'/>}

      {photosStatus === 'succeeded' &&
      <ShowMore handleShowMore={handleShowMore} />}

      {photosStatus === 'failed' &&
      <div className='error'>
        {error}
      </div>}

    </div>
  );
};

export default Photolist;
