import { combineReducers } from '@reduxjs/toolkit';
import photosReducer from './photosSlice'; 

export const rootReducer = combineReducers({
  photos: photosReducer
});

export type RootState = ReturnType<typeof rootReducer>;
