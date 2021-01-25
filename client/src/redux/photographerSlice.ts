import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Photographer {
  photographerId: string,
  username: string,
  firstName: string,
  lastName: string,
  bio: string,
  totalPhotos: number,
  totalCollections: number,
  profileImg: string,
  photographerPhotosUrl: string
}

interface PhotographerState {
  photographer: Photographer,
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}

const initialState = {
  photographer: {},
  status: 'idle',
  error: null,
} as PhotographerState;

/* Fetch info of photographer from API.
 * Generated action types will start with 'photographer/fetchPhotographer'
 */
export const fetchPhotographer = createAsyncThunk('photographer/fetchPhotographer', async (username: string) => {
  const response = await axios.get(`/photographer/${username}`);
  const data = response.data;
  const newPhotographer: Photographer = {
    photographerId: data.id,
    username,
    firstName: data.first_name,
    lastName: data.last_name,
    bio: data.bio,
    totalPhotos: data.total_photos,
    totalCollections: data.total_collections,
    profileImg: data.profile_image.large,
    photographerPhotosUrl: data.links.photos,
  };

  return newPhotographer;
});

/*
 * createSlice automatically generates action creators and action types
 * that correspond to the reducers and state
 */
const photographerSlice = createSlice({
  name: 'photographer',
  initialState,
  reducers: {},
  // Use "builder callback" syntax as it is recommended with TypeScript
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotographer.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPhotographer.fulfilled, (state, action) => {
        // Update store state: status tells that the fetch succeeded and
        // photographer contains all the necessary info of the photographer
        state.status = 'succeeded';
        state.photographer = action.payload;
      })
      .addCase(fetchPhotographer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Could not load photographer info.';
      })
  }
});

export default photographerSlice.reducer;
