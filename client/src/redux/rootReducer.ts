import { combineReducers } from '@reduxjs/toolkit';
import photolistReducer from './photolistSlice';
import photoReducer from './photoSlice';

export const rootReducer = combineReducers({
  photolist: photolistReducer,
  photo: photoReducer
});

export type RootState = ReturnType<typeof rootReducer>;
