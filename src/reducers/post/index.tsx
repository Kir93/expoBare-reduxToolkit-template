import _remove from 'lodash/remove';
import { createSlice } from '@reduxjs/toolkit';

import { loadPosts } from '@APIs/post';
import { IPost } from './interface.d';

export const initialState = {
  mainPosts: [] as IPost[],
  imagePaths: [],

  hasMorePosts: true,

  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: '',

  addPostLoading: false,
  addPostDone: false,
  addPostError: '',

  removePostLoading: false,
  removePostDone: false,
  removePostError: '',

  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: '',
};

export type PostReducerState = typeof initialState;

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    removeImage(state, action) {
      state.imagePaths = _remove(state.imagePaths, (_, i) => i === action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loadPosts.pending, (state) => {
        state.loadPostsLoading = true;
        state.loadPostsDone = false;
        state.loadPostsError = '';
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.loadPostsLoading = false;
        state.loadPostsDone = true;
        state.hasMorePosts = action.payload === 10;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.loadPostsLoading = false;
        state.loadPostsError = action.error.message ?? '';
      })
      .addDefaultCase((state) => state),
});

export default postSlice;
