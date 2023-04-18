import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, SPACING } from 'src/helpers/constants';

const { width } = Dimensions.get('window');

const Footer = ({ coffee }: any) => {
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
		color: COLORS.white,
		fontSize: SPACING * 1.5,
	},
	priceWrapper: {
		flexDirection: 'row',
	},
	symbol: {
		color: COLORS.primary,
		fontSize: SPACING * 2,
	},
	price: {
		color: COLORS.white,
		fontSize: SPACING * 1.7,
		marginLeft: SPACING / 2,
	},
	left: {
		marginLeft: SPACING,
		backgroundColor: COLORS.primary,
		width: width / 2 + SPACING * 3,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: SPACING * 2,
	},
	buy: {
		color: COLORS.white,
		fontSize: SPACING * 2,
		fontWeight: '700',
	},
});
