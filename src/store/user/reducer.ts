import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
}

const initialState: UserState = {
  isLoggedIn: false,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleLoggedin: (state, payload: { payload: boolean }) => {
      state.isLoggedIn = payload.payload;
    },
  },
});

export const { toggleLoggedin } = user.actions;

export default user.reducer;
