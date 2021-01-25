import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotographerPhotolist } from '../../../redux/photographerPhotosSlice';
import { RootState } from '../../../redux/rootReducer';
import ShowMore from '../../photolist/showMore/ShowMore';
import Loading from '../../statusIndicators/loading/Loading';
import Error from '../../statusIndicators/error/Error';
import ThumbnailList from '../../photolist/thumbnailList/ThumbnailList';

const PhotographerPhotolist: React.FC<{ username: string }> = ({ username }) => { 
  const dispatch = useDispatch();

  const photos = useSelector((state: RootState) => state.photographerPhotolist.photolist);
  const status = useSelector((state: RootState) => state.photographerPhotolist.status);
  const page = useSelector((state: RootState) => state.photographerPhotolist.page);
  const error = useSelector((state: RootState) => state.photographerPhotolist.error);

  useEffect(() => {
    if (status === 'idle') {
      const obj = {'username': username, 'pageNumber': page}
      dispatch(fetchPhotographerPhotolist(obj));
    }
  }, [dispatch, username, status, page]);

  // Dispatch action to fetch more photos from the photographer
  const handleShowMore = () => {
    const obj = {'username': username, 'pageNumber': page}
    dispatch(fetchPhotographerPhotolist(obj));
  };

  return (
    <div className='photographer-photolist'>

      <ThumbnailList thumbnails={photos} />

      {status === 'loading' &&
      <Loading />}

      {status === 'succeeded' &&
      <ShowMore handleShowMore={handleShowMore} />}

      {status === 'failed' &&
      <Error errorMsg={error} />}

    </div>
  );
};

export default PhotographerPhotolist;
