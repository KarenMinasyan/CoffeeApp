import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const coffeesSlice = createSlice({
  name: 'coffees',
  initialState,
  reducers: {},
});

export const { } = coffeesSlice.actions;
export default coffeesSlice.reducer;
