import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '@reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    __DEV__ ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
  devTools: __DEV__,
});

export default store;
