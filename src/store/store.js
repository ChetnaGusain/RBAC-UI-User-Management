import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import rolesReducer from './rolesSlice';
import permissionsReducer from './permissionsSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    roles: rolesReducer,
    permissions: permissionsReducer,
  },
});

export default store;
