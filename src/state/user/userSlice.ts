import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IUser {
  name: string;
  email: string;
  id: string;
}

const initialState: IUser = {
  name: '',
  email: '',
  id: '',
}

const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state: IUser, action: PayloadAction<IUser>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    clearUser: () => initialState,
  }
});

export const { setUser, clearUser } = UserSlice.actions;

export default UserSlice.reducer;