import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotographer } from '../../redux/photographerSlice';
import { RootState } from '../../redux/rootReducer';
import PhotographerPhotolist from './photographerPhotolist/PhotographerPhotolist';
import Loading from '../statusIndicators/loading/Loading';
import Error from '../statusIndicators/error/Error';
import './Photographer.scss';

const Photographer: React.FC<{ username: string }> = ({ username }) => { 
  const dispatch = useDispatch();

  const photographer = useSelector((state: RootState) => state.photographer.photographer);
  const photographerStatus = useSelector((state: RootState) => state.photographer.status);
  const error = useSelector((state: RootState) => state.photographer.error);

  const profileImg = photographer.profileImg;
  const firstName = photographer.firstName;
  const lastName = photographer.lastName;
  const name = `${firstName} ${lastName}`;
  const bio = photographer.bio;
  const totalPhotos = photographer.totalPhotos;
  const totalCollections = photographer.totalCollections;
  
  useEffect(() => {
    dispatch(fetchPhotographer(username));
  }, [dispatch, username]);

  return (
    <div className='photographer-view'>

      {photographerStatus === 'loading' &&
      <Loading />}

      {photographerStatus === 'succeeded' &&
      <>
        <div className='flex-container photographer-container'>
          <div className='flex-item'>
            <img src={profileImg} alt={name} className='profile-img'/>
            <h2>
              {firstName}
              <br/>
              {lastName}
            </h2>
          </div>
          <div className='flex-item'>
            <p>
              {bio}
            </p>
            <p>
              Username: {username}
              <br/>
              Photos: {totalPhotos}
              <br/>
              Collections: {totalCollections}
            </p>
          </div>
        </div>
        <PhotographerPhotolist username={username} />
      </>}

      {photographerStatus === 'failed' &&
      <Error errorMsg={error} />}

    </div>
  );
};

export default Photographer;
