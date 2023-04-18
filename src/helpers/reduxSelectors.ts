import { RootState } from 'src/store/store';

export const categorySelector = ({ category }: RootState) => category;
export const coffeesSelector = ({ coffees }: RootState) => coffees;
