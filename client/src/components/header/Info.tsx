import React from 'react';
//import { Link } from 'react-router-dom';

//const Info: React.FC<{toggleModal(): void}> = ({ toggleModal }) => {
const Info: React.FC = () => {
  return (
    <div>
      {/*<Link to='/'>
        X
      </Link>*/}
      <p>
        This app fetches data from
        {' '}
        <a href='https://unsplash.com/developers' target='_blank' rel='noreferrer'>
          Unsplash API
        </a>.
      </p>
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