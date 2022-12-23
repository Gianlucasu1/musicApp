import { configureStore } from '@reduxjs/toolkit';
import { shaCoreApi } from './services/shaCore';

import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shaCoreApi.reducerPath]: shaCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shaCoreApi.middleware),
});
