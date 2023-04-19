import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';

export const categorySelector = ({ category }: RootState) => category;
export const coffeesSelector = ({ coffees }: RootState) => coffees;

export const filterCoffeesByIdSelector = createSelector(
	({ coffees }: RootState) => coffees.products,
	({ category }: RootState) => category.categoryId,
	(items, id) => items.filter(({ categoryId }) => id === null || categoryId === id)
);
