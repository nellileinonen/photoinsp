import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotographerPhotolist } from '../../../redux/photographerPhotosSlice';
import { RootState } from '../../../redux/rootReducer';
// TODO Maybe fetch photos from multiple pages in the future
//import ShowMore from '../../photolist/showMore/ShowMore';
import Loading from '../../statusIndicators/loading/Loading';
import Error from '../../statusIndicators/error/Error';
import ThumbnailList from '../../photolist/thumbnailList/ThumbnailList';

const PhotographerPhotolist: React.FC<{ username: string }> = ({ username }) => { 
  const dispatch = useDispatch();

  const photos = useSelector((state: RootState) => state.photographerPhotolist.photolist);
  const status = useSelector((state: RootState) => state.photographerPhotolist.status);
  const error = useSelector((state: RootState) => state.photographerPhotolist.error);

  useEffect(() => {
    dispatch(fetchPhotographerPhotolist(username));
  }, [dispatch, username]);

  // TODO Maybe fetch photos from multiple pages in the future
  /*
  // Dispatch action to fetch more photos from the photographer
  const handleShowMore = () => {
    dispatch(fetchPhotographerPhotolist(username));
  };
  */

  return (
    <div className='photographer-photolist'>

      <ThumbnailList thumbnails={photos} />

      {status === 'loading' &&
      <Loading />}

      {/*
      // TODO Maybe fetch photos from multiple pages in the future
      status === 'succeeded' &&
      <ShowMore handleShowMore={handleShowMore} />*/}

      {status === 'failed' &&
      <Error errorMsg={error} />}

    </div>
  );
};

export default PhotographerPhotolist;
