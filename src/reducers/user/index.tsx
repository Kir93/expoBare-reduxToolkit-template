import { createSlice } from '@reduxjs/toolkit';

import { logIn, logOut } from '@APIs/user';

import { IUser } from './interface.d';

export const initialState = {
  me: null as IUser | null,

  logInLoading: false,
  logInDone: false,
  logInError: '',

  logOutLoading: false,
  logOutDone: false,
  logOutError: '',
};

export type UserReducerState = typeof initialState;

const dummyUser = {
  id: 1,
  nickname: '티릴리',
  Posts: [{ id: '1' }],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(logIn.pending, (state) => {
        state.logInLoading = true;
        state.logInError = '';
        state.logInDone = false;
      })
      .addCase(logIn.fulfilled, (state) => {
        state.logInLoading = false;
        state.me = dummyUser;
        state.logInDone = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.logInLoading = false;
        state.logInError = action.error.message ?? '';
      })
      .addCase(logOut.pending, (state) => {
        state.logOutLoading = true;
        state.logOutError = '';
        state.logOutDone = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.logOutLoading = false;
        state.me = null;
        state.logOutDone = true;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.logOutLoading = false;
        state.logOutError = action.error.message ?? '';
      })
      .addDefaultCase((state) => state),
});

export default userSlice;
