import { createSlice } from '@reduxjs/toolkit';

interface InfoVisibilityState {
  value: boolean;
}

const initialState: InfoVisibilityState = {
  value: true,
};

const InfoVisibilitySlice = createSlice({
  name: "infoVisibility",
  initialState: initialState,
  reducers: {
    toggleVisibility: (state) => {
      state.value = !state.value
    }
  }
});

export const { toggleVisibility } = InfoVisibilitySlice.actions;

export default InfoVisibilitySlice.reducer;