import { configureStore } from '@reduxjs/toolkit';
import coffeesSlice from 'src/store/coffees/coffeesSlice';
import categorySlice from 'src/store/category/categorySlice';

export const store = configureStore({
	reducer: {
		category: categorySlice,
		coffees: coffeesSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
