import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Photo  {
  alt: string,
  createdAt: string,
  fullUrl: string,
  photoId: string,
  regularUrl: string,
  thumbUrl: string,
  userId: string,
  userImgUrl: string,
  userRealName: string,
  username: string
}

interface PhotoState {
  photoId: string,
  photo: Photo,
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}

const initialState = {
  photoId: '',
  photo: {},
  status: 'idle',
  error: null,
} as PhotoState;

/* Fetch a single photo from API.
 * Generated action types will start with 'photo/fetchPhoto'
 */
export const fetchPhoto = createAsyncThunk('photo/fetchPhoto', async (photoId: string) => {
  const response = await axios.get(`/photolist/${photoId}`);
  const data = response.data;

  const date = new Date(data.created_at);
  const createdAt = date.toLocaleString('en-BG');

  const newPhoto: Photo = {
    'alt': data.alt_description,
    'createdAt': createdAt,
    'fullUrl': data.urls.full,
    'photoId': data.id,
    'regularUrl': data.urls.regular,
    'thumbUrl': data.urls.thumb,
    'userId': data.user.id,
    'userImgUrl': data.user.profile_image.small,
    'userRealName': data.user.name,
    'username': data.user.username
  };

  return newPhoto;
});

/*
 * createSlice automatically generates action creators and action types
 * that correspond to the reducers and state
 */
const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {},
  // Use "builder callback" syntax as it is recommended with TypeScript
  extraReducers: builder => {
    builder
    .addCase(fetchPhoto.pending, (state, action) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(fetchPhoto.fulfilled, (state, action) => {
      console.log('fulfilled action: ', action.payload);
      // Update store state: status tells that the fetch succeeded, photoId is the id of the fetched
      // photo and photo contains all the necessary info of the photo
      state.status = 'succeeded';
      state.photoId = action.payload.photoId;
      state.photo = action.payload;
    })
    .addCase(fetchPhoto.rejected, (state, action) => {
      console.log('failed action: ', action.payload);
      state.status = 'failed';
      state.error = 'Could not load photo.';
    })
  },
});

export default photoSlice.reducer;
