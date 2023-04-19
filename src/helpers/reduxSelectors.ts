import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';

export const categorySelector = ({ category }: RootState) => category;
export const coffeesSelector = ({ coffees }: RootState) => coffees;

export const filterCoffeesByIdSelector = createSelector(
	({ coffees }: RootState) => coffees.products,
	({ category }: RootState) => category.categoryId,
	(items, id) => items.filter(({ categoryId }) => id === null || categoryId === id)
);

export const findCoffeeByIdSelector = createSelector(
	({ coffees }: RootState) => coffees.products,
	({ coffees }: RootState) => coffees.coffeeId,
	(items, coffeeId) => items.find(({ id }) => id === coffeeId)
);
