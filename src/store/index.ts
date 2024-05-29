import {configureStore} from '@reduxjs/toolkit';
import heroSlice from '../features/HeroList/store/heroSlice';

export const store = configureStore({
  reducer: {
    hero: heroSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
