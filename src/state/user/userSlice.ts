// Types
import { ITokenUser } from '@/@types/user';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ITokenUser = {
  iss: '',
  sub: '',
  exp: 0,
}

const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state: ITokenUser, action: PayloadAction<ITokenUser>) => {
      state.iss = action.payload.iss;
      state.sub = action.payload.sub;
      state.exp = action.payload.exp;
    },
    clearUser: () => initialState,
  }
});

export const { setUser, clearUser } = UserSlice.actions;

export default UserSlice.reducer;