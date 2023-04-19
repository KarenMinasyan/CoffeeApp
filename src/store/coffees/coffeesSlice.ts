import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const coffeesSlice = createSlice({
	name: 'coffees',
	initialState,
	reducers: {
		chosenCoffee: (state, { payload }) => {
			state.coffeeId = payload;
		},
		clear: (state) => {
			state.coffeeId = null;
		},
	},
});

export const { chosenCoffee, clear } = coffeesSlice.actions;
export default coffeesSlice.reducer;
