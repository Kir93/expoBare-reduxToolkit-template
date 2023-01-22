import { combineReducers } from 'redux';
import { createSelector } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import userSlice from './user';
import postSlick from './post';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  post: postSlick.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export const userState = createSelector(
  (state: RootState) => state.user,
  (user) => user,
);

export const postState = createSelector(
  (state: RootState) => state.post,
  (user) => user,
);

export default rootReducer;
