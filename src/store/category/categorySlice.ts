import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initalState';

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    chooseCategory: (state, { payload }) => {
      if (payload === state.categoryId) {
        state.categoryId = null;
      } else {
        state.categoryId = payload;
      }
    }
	},
});

export const { chooseCategory } = categorySlice.actions;
export default categorySlice.reducer;
