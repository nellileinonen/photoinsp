import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';

import './UserIntro.scss';

const UserIntro: React.FC = () => {
  const userImgUrl = useSelector((state: RootState) => state.photo.photo.userImgUrl);
  const userRealName = useSelector((state: RootState) => state.photo.photo.userRealName);
  const username = useSelector((state: RootState) => state.photo.photo.username);

  return (
    <div className='user-intro'>
      <div>
        <img src={userImgUrl} alt='' className='user-img'/>
      </div>
      <div className='user-name'>
        <p>
          {userRealName}
          <br/>
          Username: {username}
        </p>
      </div>
    </div>
  );
}

export default UserIntro;