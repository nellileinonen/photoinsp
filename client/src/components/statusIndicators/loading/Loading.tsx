import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import './Loading.scss';

const Loading: React.FC = () => {
  return (
    <div className='loading'>
      <LoadingOutlined />
    </div>
  );
};

export default Loading;
