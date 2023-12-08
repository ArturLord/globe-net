import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  user: {
    username: string;
  } | null;
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = action.payload;
    },
    logoutUser(state) {
      state.user = null;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
