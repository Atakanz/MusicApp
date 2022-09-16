import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  GenreList: [],
  PlayList: [],
  LikedSong: [],
};

export const songListSlice = createSlice({
  name: 'songList',
  initialState,
  reducers: {
    setGenreList: (state, action) => {
      state.GenreList = action.payload;
    },
    setPlayList: (state, action) => {
      state.PlayList = action.payload;
    },
    setLikedSong: (state, action) => {
      state.LikedSong = [...state.LikedSong, action.payload];
    },
    setSongList: (state, action) => {
      state.songList= action.payload;
    },
    unlikeSong: (state, action) => {
      state.LikedSong = state.LikedSong.filter((item) =>
      item.idValue !== action.payload);
    },
  },
});

export const {setGenreList, setPlayList, setLikedSong, setSongList, unlikeSong} = songListSlice.actions;

export default songListSlice.reducer;