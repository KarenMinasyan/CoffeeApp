import { configureStore } from '@reduxjs/toolkit';
import categorySlice from 'src/store/category/categorySlice';
import coffeesSlice from 'src/store/coffees/coffeesSlice';

export const store = configureStore({
	reducer: {
		category: categorySlice,
		coffees: coffeesSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
