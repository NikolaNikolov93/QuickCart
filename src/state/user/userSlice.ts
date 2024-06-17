import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: {
    email: string;
    id: string;
    favourites: [];
  };
}

const initialState: UserState = {
  user: {
    email: "",
    id: "",
    favourites: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { saveUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
