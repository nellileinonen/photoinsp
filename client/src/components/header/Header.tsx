import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
      >
        info
      </Link>
    </header>
  );
}

export default Header;