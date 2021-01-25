import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThumbnailType, PhotolistState } from './photolistSlice';

const initialState = {
  photolist: [],
  username: '',
  status: 'idle',
  // TODO Maybe fetch photos from multiple pages in the future
  page: 1,
  error: null,
} as PhotolistState;

/* Fetch photographer's photos from API.
 * Generated action types will start with 'photographer/fetchPhotographerPhotolist'
 */
export const fetchPhotographerPhotolist =
  createAsyncThunk('photographer/fetchPhotographerPhotolist',
  async (username: string) => {

  const response = await axios.get(`/photographer/${username}/photos`);

  const newPhotographerPhotolist: ThumbnailType[] = response.data.map((item: any) => (
    {
      'alt': item.alt_description,
      'photoId': item.id,
      'thumbUrl': item.urls.thumb,
    }
  ));

  return newPhotographerPhotolist;
});

/*
 * createSlice automatically generates action creators and action types
 * that correspond to the reducers and state
 */
const photographerPhotolistSlice = createSlice({
  name: 'photographerPhotolist',
  initialState,
  reducers: {},
  // Use "builder callback" syntax as it is recommended with TypeScript
  extraReducers: builder => {
    builder
    .addCase(fetchPhotographerPhotolist.pending, (state, action) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(fetchPhotographerPhotolist.fulfilled, (state, action) => {
      // Update store state: status tells that the fetch succeeded and
      // photographer contains all the necessary info of the photographer
      state.status = 'succeeded';
      state.photolist = action.payload;
    })
    .addCase(fetchPhotographerPhotolist.rejected, (state, action) => {
      state.status = 'failed';
      state.error = 'Could not load photographer\'s photos.';
    })
  },
});

export default photographerPhotolistSlice.reducer;
