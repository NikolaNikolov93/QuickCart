import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import favouritesReducer from "./favourites/favouritesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    favourtes: favouritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
