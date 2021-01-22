import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { InfoCircleOutlined } from '@ant-design/icons';

import './Header.scss';

const Header: React.FC = () => {
  let location = useLocation();

  return (
    <header>
      <Link to='/'>
        <h1>Photoinsp</h1>
      </Link>
      <Link to={{
        pathname: '/info',
        state: { background: location }
        }}
        className='info'
      >
        <InfoCircleOutlined />
      </Link>
    </header>
  );
}

export default Header;