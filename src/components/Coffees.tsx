import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COFFEES, COLORS, SPACING } from 'src/helpers/constants';
import { BlurView } from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const Coffees = ({ activeCategoryId }: any) => {
	return (
		<View style={styles.coffees}>
			{COFFEES.filter((coffee) => {
				if (activeCategoryId === null) {
					return true;
				}
				return coffee.categoryId === activeCategoryId;
			}).map((coffee) => (
				<View key={coffee.id} style={styles.coffee}>
					<BlurView overlayColor={'#1f2126'}>
						<View style={styles.coffeeWrapper}>
							<View style={styles.coffeeInner}>
								<TouchableOpacity style={styles.imgContainer}>
									<Image source={coffee.image} style={styles.img} />
									<View style={styles.rating}>
										<BlurView overlayColor={'#1f2126'}>
											<View style={styles.star}>
												<Icon
													style={styles.starIcon}
													name='star'
													size={SPACING * 1.7}
													color={COLORS.primary}
												/>
												<Text style={styles.rate}>{coffee.rating}</Text>
											</View>
										</BlurView>
									</View>
								</TouchableOpacity>
								<Text style={styles.title} numberOfLines={2}>
									{coffee.name}
								</Text>
								<Text style={styles.included} numberOfLines={1}>
									{coffee.included}
								</Text>
								<View style={styles.footer}>
									<View style={styles.inner}>
										<Text style={styles.symbol}>$</Text>
										<Text style={styles.price}>{coffee.price}</Text>
									</View>
									<TouchableOpacity style={styles.add}>
										<Icon name='add' size={SPACING * 2} color={COLORS.white} />
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</BlurView>
				</View>
			))}
		</View>
	);
};

export default Coffees;

const styles = StyleSheet.create({
	coffees: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	coffee: {
		width: width / 2 - SPACING * 2,
		marginBottom: SPACING,
		borderRadius: SPACING * 2,
		overflow: 'hidden',
	},
	coffeeWrapper: {
		padding: SPACING,
	},
	coffeeInner: {
		justifyContent: 'center',
	},
	imgContainer: {
		height: 150,
		width: '100%',
	},
	img: {
		width: '100%',
		height: '100%',
		borderRadius: SPACING * 2,
	},
	rating: {
		position: 'absolute',
		right: 0,
		borderBottomStartRadius: SPACING * 3,
		borderTopEndRadius: SPACING * 2,
		overflow: 'hidden',
	},
	star: {
		flexDirection: 'row',
		padding: SPACING - 2,
	},
	starIcon: {
		marginLeft: SPACING / 2,
	},
	rate: {
		color: COLORS.white,
		marginLeft: SPACING / 2,
	},
	title: {
		color: COLORS.white,
		fontWeight: '600',
		fontSize: SPACING * 1.7,
		marginTop: SPACING,
		marginBottom: SPACING / 2,
	},
	included: {
		color: COLORS.secondary,
		fontSize: SPACING * 1.2,
	},
	footer: {
		marginVertical: SPACING / 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	inner: {
		flexDirection: 'row',
	},
	symbol: {
		color: COLORS.primary,
		marginRight: SPACING / 2,
		fontSize: SPACING * 1.6,
	},
	price: {
		color: COLORS.white,
		fontSize: SPACING * 1.6,
	},
	add: {
		backgroundColor: COLORS.primary,
		padding: SPACING / 2,
		borderRadius: SPACING,
	},
});
