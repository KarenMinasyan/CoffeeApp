import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { categories, COLORS, SPACING } from 'src/helpers/constants';
import { categorySelector } from 'src/helpers/reduxSelectors';
import { useAppDispatch, useAppSelector } from 'src/hook';
import { chooseCategory } from 'src/store/category/categorySlice';

const Categories = () => {
	const { categoryId } = useAppSelector(categorySelector);
	const dispatch = useAppDispatch();

	const handlePress = (id: number) => {
		dispatch(chooseCategory(id));
	};

	return (
		<FlatList
			horizontal={true}
			data={categories}
			keyExtractor={(item: any) => item.id}
			contentContainerStyle={styles.container}
			renderItem={({ item }) => (
				<TouchableOpacity style={styles.category} onPress={() => handlePress(item.id)}>
					<Text style={[styles.categoryItem, categoryId === item.id && { color: COLORS.primary }]}>
						{item.name}
					</Text>
					{categoryId === item.id && <View style={styles.activeItem} />}
				</TouchableOpacity>
			)}
		/>
	);
};

export default Categories;

const styles = StyleSheet.create({
	container: {
		marginVertical: SPACING,
	},
	category: {
		marginRight: SPACING * 2,
		alignItems: 'center',
	},
	categoryItem: {
		color: COLORS.secondary,
		fontSize: SPACING * 2,
	},
	activeItem: {
		height: SPACING,
		width: SPACING,
		backgroundColor: COLORS.primary,
		borderRadius: SPACING / 2,
		marginTop: SPACING / 2,
	},
});
