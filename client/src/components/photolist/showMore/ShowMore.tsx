import React from 'react';

import './ShowMore.scss';

const ShowMore: React.FC<{handleShowMore: Function}> = ({ handleShowMore }) => {
  return (
    <div className='show-more'>
      <button onClick={() => handleShowMore()} className='show-more-button'>Show more</button>
    </div>
  );
}

export default ShowMore;