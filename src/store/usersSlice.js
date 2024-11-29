import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const index = state.findIndex(user => user.id === action.payload.id);
      if (index >= 0) state[index] = action.payload;
    },
    deleteUser: (state, action) => {
      return state.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, editUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
