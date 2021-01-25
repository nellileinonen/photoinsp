import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';
import './PhotographerIntro.scss';

const PhotographerIntro: React.FC = () => {
  const userImgUrl = useSelector((state: RootState) => state.photo.photo.userImgUrl);
  const userRealName = useSelector((state: RootState) => state.photo.photo.userRealName);
  const username = useSelector((state: RootState) => state.photo.photo.username);

  return (
    <div className='photographer-intro'>
      <div>
        <img src={userImgUrl} alt='' className='photographer-img'/>
      </div>
      <div className='photographer-name'>
        <p>
          <Link to={{ pathname: `/photographer/${username}` }} >
            {userRealName}
          </Link>
          <br/>
          Username: {username}
        </p>
      </div>
    </div>
  );
};

export default PhotographerIntro;
