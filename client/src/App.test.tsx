import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';

test('renders without crashing', () => {
  const initialState = {
    photolist: {
      photolist: [],
      status: 'idle',
      page: 1,
      photoCount: 1,
      error: null,
    },
    photo: {
      photoId: '',
      photo: {},
      status: 'idle',
      error: null,
    }
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
