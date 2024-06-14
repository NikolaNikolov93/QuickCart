import { createSlice } from "@reduxjs/toolkit";

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
    removeFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (item) => item !== action.payload // Assuming each favourite item has a unique `id`
      );
    },
  },
});

export const { saveToFavouirtes, setFavourites, removeFromFavourites } =
  favouitesSlice.actions;

export default favouitesSlice.reducer;
