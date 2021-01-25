import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface ThumbnailType {
  alt: string,
  photoId: string,
  thumbUrl: string,
  // TODO make this compulsory
  username: string
}

export interface PhotolistState {
  photolist: ThumbnailType[],
  // Username is defined if it's a photographer's photo list
  username?: string,
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  page: number,
  error: string | null
}

const initialState = {
  photolist: [],
  status: 'idle',
  page: 1,
  error: null,
} as PhotolistState;

/* Fetch photos from API.
 * Generated action types start with 'photolist/fetchPhotos'
 */
export const fetchPhotos = createAsyncThunk('photolist/fetchPhotos', async (pageNumber: number) => {
  const response = await axios.get('/photolist', {
    params: {
      page: pageNumber
    }
  });

  const newPhotos: ThumbnailType[] = response.data.map((item: any) => (
    {
      'alt': item.alt_description,
      'photoId': item.id,
      'thumbUrl': item.urls.thumb,
      'username': item.user.username
    }
  ));
  return newPhotos;
});

/*
 * createSlice automatically generates action creators and action types
 * that correspond to the reducers and state
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
      // Photo fetching was successful if the action payload is an array
      if (Array.isArray(action.payload)) {

        /* Data in Unsplash updates often and same photos can be fetched multiple times if
         * the app is left open and after a while the user continues browsing where they left.
         * Check that new photos fetched are not duplicates of the ones already visible.
         */
        const notInPhotolist = (thumbnail: ThumbnailType) => {
          const found = state.photolist.find(item => item.photoId === thumbnail.photoId);
          if (typeof found === 'undefined') {
            return true;
          } else {
            return false;
          }
        }
        const newPhotos = action.payload.filter((item: ThumbnailType) => notInPhotolist(item));

        if (newPhotos.length > 0) {
          // Update store state: status tells that the fetch succeeded, page tells the next page
          // to be fetched and photos is the place for photos
          state.status = 'succeeded';
          state.page = state.page + 1;
          state.photolist = state.photolist.concat(newPhotos);
        } else {
          state.status = 'failed';
          state.error = 'Could not load photos. Please, refresh the page to get the newest content!';
        }
      } else {
        // If action payload is something else than an array, fetch failed
        state.status = 'failed';
        state.error = 'Could not load photos.';
      }
    })
    .addCase(fetchPhotos.rejected, (state, action) => {
      state.status = 'failed';
      state.error = 'Could not load photos.';
    })
  },
});

export default photolistSlice.reducer;
