import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './redux/rootReducer';

const store = configureStore({ reducer: rootReducer });

//console.log('store state: ', store.getState());

export default store;

export type RootState = ReturnType<typeof store.getState>
