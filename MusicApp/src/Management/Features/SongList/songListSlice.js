import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  songList: [],
};

export const songListSlice = createSlice({
  name: 'songList',
  initialState,
  reducers: {
    setSongList: (state, action) => {
      state.songList = action.payload;
    },
  },
});

export const {setSongList, songList} = songListSlice.actions;

export default songListSlice.reducer;