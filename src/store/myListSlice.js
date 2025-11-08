import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: JSON.parse(localStorage.getItem("movies")) || [],
  tvSeries: JSON.parse(localStorage.getItem("tvSeries")) || [],
};

const myListSlice = createSlice({
  name: "myList",
  initialState,
  reducers: {
    addMovieToList: (state, action) => {
      const movieExists = state.movies.find((movie) => movie.id === action.payload.id);
      if (movieExists) {
        return;
      }

      state.movies.push(action.payload);
    },
    addTvSeriesToList: (state, action) => {
      const tvSeriesExist = state.tvSeries.find((tv) => tv.id === action.payload.id);
      if (tvSeriesExist) {
        return;
      }
      state.tvSeries.push(action.payload);
    },

    removeMovieFromList: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
    removeTvSeriesFromList: (state, action) => {
      state.tvSeries = state.tvSeries.filter((tvSeries) => tvSeries.id !== action.payload);
    },
  },
});

export const { addMovieToList, addTvSeriesToList, removeMovieFromList, removeTvSeriesFromList } =
  myListSlice.actions;

export default myListSlice.reducer;
