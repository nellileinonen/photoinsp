import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.scss';

const NoMatch: React.FC = () => {
  return (
    <div className='no-match'>
      <p>
        The page you requested could not be found.
        <br/>
        Please, continue browsing to the
        {' '}
        <Link to='/'>
          front page
        </Link>
        .
      </p>
    </div>
  );
};

export default NoMatch;
