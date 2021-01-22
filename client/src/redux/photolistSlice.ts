import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface PhotolistState {
  photolist: any, //[],
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  page: number,
  error: any //string | null
}

const initialState = {
  photolist: [],
  page: 1,
  status: 'idle',
  error: null,
} as PhotolistState;

/* Fetch photos from API
 * Generated action types will start with 'photos/fetchPhotos'
 */
export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async (pageNumber: number) => {
  const response = await axios.get('/photos', {
    params: {
      page: pageNumber
    }
  });

  const newPhotos = response.data.map((item: any) => (
    {
      'alt': item.alt_description,
      'photoId': item.id,
      'thumbUrl': item.urls.thumb,
    }
  ));
  return newPhotos;
});

/*
 *
 */
const photolistSlice = createSlice({
  name: 'photolist',
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
      console.log('fulfilled action: ', action);
      // Photo fetching was successfull if the action payload is an array
      if (Array.isArray(action.payload)) {
        // Update store state: status tells that the fetch succeeded, page tells the next page
        // to be fetched and photos is the place for photos
        state.status = 'succeeded';
        state.page = state.page + 1;
        state.photolist = state.photolist.concat(action.payload);
      } else {
        // If action payload is something else than an array, fetch failed
        state.status = 'failed';
        state.error = 'Could not load photos.';
        //state.error = action.payload;
      }
    })
    .addCase(fetchPhotos.rejected, (state, action) => {
      console.log('failed action: ', action);
      state.status = 'failed';
      state.error = 'Could not load photos.';
      //state.error = action.payload;
    })
  },
});

export default photolistSlice.reducer;