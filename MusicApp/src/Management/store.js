import {configureStore} from '@reduxjs/toolkit';
import songListSlice from './Features/SongList/songListSlice';
import userSlice from './Features/User/userSlice';
import themeSlice from './Features/Theme/themeSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    songList: songListSlice,
    theme: themeSlice,
  },
});