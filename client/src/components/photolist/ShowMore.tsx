import React from 'react';

const ShowMore: React.FC<{handleShowMore: Function}> = ({ handleShowMore }) => {
  return (
    <div>
      <button onClick={() => handleShowMore()}>Show more</button>
    </div>
  );
}

export default ShowMore;