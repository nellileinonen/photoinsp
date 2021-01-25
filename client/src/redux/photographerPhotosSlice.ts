import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThumbnailType, PhotolistState } from './photolistSlice';

const initialState = {
  photolist: [],
  username: '',
  status: 'idle',
  page: 1,
  error: null,
} as PhotolistState;

/* Fetch photographer's photos from API.
 * Generated action types will start with 'photographerPhotolist/fetchPhotographerPhotolist'
 */
export const fetchPhotographerPhotolist = createAsyncThunk('photographerPhotolist/fetchPhotographerPhotolist',
  async (info: any) => {
    const { username, pageNumber } = info;
    const response = await axios.get(`/photographer/${username}/photos`, {
      params: {
        page: pageNumber,
      },
    });

    const newPhotographerPhotolist: ThumbnailType[] = response.data.map((item: any) => (
      {
        alt: item.alt_description,
        photoId: item.id,
        thumbUrl: item.urls.thumb,
        username: item.user.username,
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
  reducers: {
    // Action type: photographerPhotolist/reset
    reset: (state, action) => {
      state.photolist = [];
      state.username = '';
      state.status = 'idle';
      state.page = 1;
      state.error = null;
    }
  },
  // Use "builder callback" syntax as it is recommended with TypeScript
  extraReducers: builder => {
    builder
      .addCase(fetchPhotographerPhotolist.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPhotographerPhotolist.fulfilled, (state, action) => {
        // Photo fetching was successful if the action payload is an array
        if (Array.isArray(action.payload)) {
          /* Data in Unsplash updates often and same photos can be fetched multiple times if
           * the app is left open and after a while the user continues browsing where they left.
           * Check that new photos fetched are not duplicates of the ones already visible.
           */
          const notInPhotolist = (thumbnail: ThumbnailType) => {
            const found = state.photolist.find((item) => item.photoId === thumbnail.photoId);
            if (typeof found === 'undefined') {
              return true;
            } else {
              return false;
            }
          }
          const newPhotos = action.payload.filter((item: ThumbnailType) => notInPhotolist(item));

          if (newPhotos.length > 0) {
            // Update store state: status tells that the fetch succeeded, page tells the next page
            // to be fetched and photolist is the place for photos
            state.status = 'succeeded';
            state.page = state.page + 1;
            state.photolist = state.photolist.concat(newPhotos);

            // Update also the photographer's username if not already the right one
            const newUsername = newPhotos[0].username;
            if (newUsername !== state.username) {
              state.username = newUsername;
            }
          } else {
            state.status = 'failed';
            state.error = 'This was the end. You\'ve seen all the photos!';
          }
        } else {
          // If action payload is something else than an array, fetch failed
          state.status = 'failed';
          state.error = 'Could not load photos.';
        }
      })
      .addCase(fetchPhotographerPhotolist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Could not load photographer\'s photos.';
      })
  },
});

export const { reset } = photographerPhotolistSlice.actions;
export default photographerPhotolistSlice.reducer;
