import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from '../../redux/photolistSlice';
import { RootState } from '../../redux/rootReducer';
import ThumbnailList from './thumbnailList/ThumbnailList';
import ShowMore from './showMore/ShowMore';
import Loading from '../statusIndicators/loading/Loading';
import Error from '../statusIndicators/error/Error';

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

      <ThumbnailList thumbnails={photos} />

      {photosStatus === 'loading' &&
      <Loading />}

      {photosStatus === 'succeeded' &&
      <ShowMore handleShowMore={handleShowMore} />}

      {photosStatus === 'failed' &&
      <Error errorMsg={error} />}

    </div>
  );
};

export default Photolist;
