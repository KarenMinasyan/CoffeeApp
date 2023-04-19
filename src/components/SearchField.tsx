import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';
import { COLORS, SPACING } from 'src/helpers/constants';
import { useAppDispatch } from 'src/hook';
import useDebounce from 'src/hooks/useDebounce';
import { filterValue } from 'src/store/coffees/coffeesSlice';

const SearchField = () => {
	const [filterInputValue, setFilterInputValue] = useState('');
	const debouncedSearch = useDebounce(filterInputValue, 500);

	const dispatch = useAppDispatch();

	useEffect(() => {
		filterMessages();
	}, [debouncedSearch]);

	const filterMessages = () => {
		dispatch(filterValue(filterInputValue));
	};

	const handleInputValue = (text: string) => {
		setFilterInputValue(text);
	};

	return (
		<View style={styles.search}>
			<BlurView overlayColor={'#1f2126'}>
				<View style={styles.inner}>
					<TextInput
						style={styles.field}
						placeholder='Find Your Coffee...'
						placeholderTextColor={COLORS.light}
						onChangeText={handleInputValue}
						value={filterInputValue}
					/>
					<Icon style={styles.searchIcon} name='search' size={SPACING * 2} color={COLORS.light} />
				</View>
			</BlurView>
		</View>
	);
};

export default SearchField;

const styles = StyleSheet.create({
	search: {
		borderRadius: SPACING,
		overflow: 'hidden',
	},
	inner: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	field: {
		width: '100%',
		color: COLORS.white,
		fontSize: SPACING * 1.7,
		padding: SPACING,
		paddingLeft: SPACING * 3.5,
	},
	searchIcon: {
		position: 'absolute',
		left: SPACING,
	},
});
