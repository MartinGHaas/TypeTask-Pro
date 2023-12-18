import { configureStore } from '@reduxjs/toolkit';

import infoVisibilityReducer from './infoVisibility/infoVisibilitySlice';
import setUserReducer from './user/userSlice'

export const store = configureStore({
  reducer: {
    infoVisibility: infoVisibilityReducer,
    user: setUserReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;