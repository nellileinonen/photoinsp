import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { InfoCircleOutlined } from '@ant-design/icons';
import './Navigation.scss';

const Navigation: React.FC = () => {
  const location = useLocation();
  const atRoot = location.pathname === '/';

  return (
    <nav>
      <Link
        to='/'
        className='home'
      >
        Photoinsp
      </Link>
      {atRoot &&
      (
      <Link
        to={{
          pathname: '/info',
          state: {
            background: location
          }
        }}
        className='info'
      >
        <InfoCircleOutlined />
      </Link>
      )}
    </nav>
  );
};

export default Navigation;
