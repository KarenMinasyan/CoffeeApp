import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, SPACING } from 'src/helpers/constants';
import { CoffeeProductType } from 'src/store/coffees/initialState';

const { white, primary } = COLORS;
const { width } = Dimensions.get('window');

const Footer = ({ coffee }: { coffee: CoffeeProductType }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.right}>
				<Text style={styles.title}>Price</Text>
				<View style={styles.priceWrapper}>
					<Text style={styles.symbol}>$</Text>
					<Text style={styles.price}>{coffee.price}</Text>
				</View>
			</View>
			<TouchableOpacity style={styles.left}>
				<Text style={styles.buy}>Buy Now</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default Footer;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	right: {
		padding: SPACING,
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: SPACING * 3,
	},
	title: {
		color: white,
		fontSize: SPACING * 1.5,
	},
	priceWrapper: {
		flexDirection: 'row',
	},
	symbol: {
		color: primary,
		fontSize: SPACING * 2,
	},
	price: {
		color: white,
		fontSize: SPACING * 1.7,
		marginLeft: SPACING / 2,
	},
	left: {
		marginLeft: SPACING,
		backgroundColor: primary,
		width: width / 2 + SPACING * 3,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: SPACING * 2,
	},
	buy: {
		color: white,
		fontSize: SPACING * 2,
		fontWeight: '700',
	},
});
