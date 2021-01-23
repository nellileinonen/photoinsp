import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Photoinsp</h1>
      <h2>Browse photos, relax and get inspired</h2>
      <div className='divider'>
        <span className='line'></span>
      </div>
    </header>
  );
};

export default Header;