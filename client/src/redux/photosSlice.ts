import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface PhotosState {
  photos: any, //[],
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  page: number,
  error: any //string | null
}

const initialState = {
  photos: [],
  page: 1,
  status: 'idle',
  error: null,
} as PhotosState;

/* Fetch photos from API 
 * Generated action types will start with 'photos/fetchPhotos'
 */
export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async (pageNumber: number) => {
  const response = await axios.get('/photos', {
    params: {
      page: pageNumber
    }
  });

  // If response contains data in an array, parse relevant info
  if (Array.isArray(response.data)) {
    console.log(response.data);
    const newPhotos = response.data.map((item: any) => (
      {
        'photoId': item.id,
        'thumbUrl': item.urls.thumb,
        'alt': item.alt_description,
        'createdAt': item.created_at,
        'regularUrl': item.urls.regular,
        'userId': item.user.id,
        'userRealName': item.user.name,
        'username': item.user.username,
        'userImgUrl': item.user.profile_image.small
      }
    ));
    return newPhotos;
  } else {
    // Return error message if response data is not an array
    console.log(response.data.message);
    return response.data.message;
  }
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

      //console.log('fulfilled action: ', action);

      // Photo fetching was successfull if the action payload is an array
      if (Array.isArray(action.payload)) {
        // Update store state: status tells that the fetch succeeded, page tells the next page
        // to be fetched and photos is the place for photos
        state.status = 'succeeded';
        state.page = state.page + 1;
        state.photos = state.photos.concat(action.payload);
      } else {
        // If action payload is something else than an array, fetch failed
        state.status = 'failed';
        state.error = 'Could not load photos.';
        //state.error = action.payload;
      }
    })
    .addCase(fetchPhotos.rejected, (state, action) => {
      state.status = 'failed';
      console.log('failed action: ', action);
      state.error = 'Could not load photos.';
      //state.error = action.payload;
    })
  },
});

export default photosSlice.reducer;