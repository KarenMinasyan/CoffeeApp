import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS, SPACING } from 'src/helpers/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';

const SearchField = () => {
	return (
		<View style={styles.search}>
			<BlurView overlayColor={'#1f2126'}>
				<View style={styles.inner}>
					<TextInput
						style={styles.field}
						placeholder='Find Your Coffee...'
						placeholderTextColor={COLORS.light}
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
