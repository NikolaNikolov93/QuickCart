import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { saveUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
