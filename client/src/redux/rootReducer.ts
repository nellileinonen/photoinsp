import { combineReducers } from '@reduxjs/toolkit';
import photolistReducer from './photolistSlice';
import photoReducer from './photoSlice';
import photographerReducer from './photographerSlice';
import photographerPhotolistReducer from './photographerPhotosSlice';

export const rootReducer = combineReducers({
  photolist: photolistReducer,
  photo: photoReducer,
  photographer: photographerReducer,
  photographerPhotolist: photographerPhotolistReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
