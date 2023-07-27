import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const fetchPosts = createAsyncThunk('posts/fetchAll', async () => {
  const response = await api.fetchPosts();
  return response.data;
});

export const createNewPost = createAsyncThunk('posts/create', async (post) => {
  const response = await api.createPost(post);
  return response.data;
});
   
const postSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default postSlice.reducer;