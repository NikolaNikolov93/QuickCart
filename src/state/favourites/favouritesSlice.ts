import { createSlice } from "@reduxjs/toolkit";
import { average } from "firebase/firestore";

interface FavouritesState {
  favourites: [];
}

const initialState: FavouritesState = {
  favourites: [],
};

const favouitesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      state.favourites = action.payload;
    },
    saveToFavouirtes: (state, action) => {
      state.favourites.push(action.payload);
    },
  },
});

export const { saveToFavouirtes, setFavourites } = favouitesSlice.actions;

export default favouitesSlice.reducer;
