import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface PhotosState {
  photos: any, //[],
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: any //string | null
}

const initialState = {
  photos: [],
  status: 'idle',
  error: null,
} as PhotosState;

/* Fetch photos from API 
 * Generated action types will start with 'photos/fetchPhotos'
 */
export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
  const response = await axios.get('/photos');
  console.log('in photosSlice response data: ', response.data);
  const newPhotos = response.data.map((item: any) => (
    {
      'photoId': item.id,
      'thumb': item.urls.thumb,
      'alt': item.alt_description
    }
  ));
  console.log('in photosSlice newPhotos: ', newPhotos);
  return newPhotos;
});

/*
 *
 */
const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  // Use "builder callback" syntax as it is recommended with TypeScript
  extraReducers: builder => {
    builder
    .addCase(fetchPhotos.pending, (state, action) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(fetchPhotos.fulfilled, (state, action) => {
      state.status = 'succeeded';
      console.log('action payload in extra reducer: ', action.payload);
      state.photos = state.photos.concat(action.payload);
      //state.photos = action.payload;
      console.log('state.photos in extra reducer: ', state.photos);
    })
    .addCase(fetchPhotos.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    })
  },
});

export default photosSlice.reducer;