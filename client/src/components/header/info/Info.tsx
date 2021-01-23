import React from 'react';

import './Info.scss';

const Info: React.FC = () => {
  return (
    <div className='info-content'>
      <h3>What is this?</h3>
      <p>
        This app is created for you to enjoy beautiful photographs shared by people from
        all around the world.
      </p>
      <p>
        Here you can calm down and focus on the essential - the photographs.
        There are no notifications or anything else that could distract you.
      </p>
      <h3>Whose photos are these?</h3>
      <p>
        This app fetches data from
        {' '}
        <a href='https://unsplash.com/developers' target='_blank' rel='noreferrer'>
          Unsplash API
        </a>. Every photo view has a link to the original full-sized photo.
      </p>
      <h3>Who made this?</h3>
      <p>
        The app is created by a hobbyist web developer
        {' '}
        <a href='https://github.com/nellileinonen' target='_blank'  rel='noreferrer'>
          Nelli Leinonen
        </a>.
        {' '}
        Source code on
        {' '}
        <a href='https://github.com/nellileinonen/photoinsp' target='_blank' rel='noreferrer'>
          GitHub
        </a>.
      </p>
    </div>
  );
}

export default Info;