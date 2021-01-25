import React from 'react';
import './Error.scss';

const Error: React.FC<{ errorMsg: string | null }> = ({ errorMsg }) => {
  return (
    <div className='error'>
      {errorMsg !== null ?
      <p>{errorMsg}</p> :
      <p>Could not load content.</p> 
      }
    </div>
  );
};

export default Error;
