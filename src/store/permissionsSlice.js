import { createSlice } from '@reduxjs/toolkit';

const permissionsSlice = createSlice({
  name: 'permissions',
  initialState: [],
  reducers: {
    setPermissions: (state, action) => {
      return action.payload; // Replace with new permissions
    },
  },
});

export const { setPermissions } = permissionsSlice.actions;
export default permissionsSlice.reducer;
