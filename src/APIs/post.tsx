import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadPosts = createAsyncThunk('post/loadPosts', (lastId: number): number => lastId);
