import { configureStore } from "@reduxjs/toolkit";
import myListSlice from "./myListSlice";

const store = configureStore({
  reducer: {
    myList: myListSlice,
  },
});

store.subscribe(() => {
  const state = store.getState().myList;
  localStorage.setItem("movies", JSON.stringify(state.movies));
  localStorage.setItem("tvSeries", JSON.stringify(state.tvSeries));
});

export default store;
