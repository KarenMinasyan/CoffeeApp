import React from 'react';
import {
	Dimensions,
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { COLORS, SPACING } from 'src/helpers/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';

const { height } = Dimensions.get('window');

const Detail = ({ coffee }: any) => {
	return (
		<ImageBackground source={coffee.image} style={styles.container} imageStyle={styles.bg}>
			<View style={styles.inner}>
				<TouchableOpacity style={styles.back}>
					<Icon name='arrow-back' size={SPACING * 2} color={COLORS.light} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.favorite}>
					<Icon name='heart' size={SPACING * 2} color={COLORS.light} />
				</TouchableOpacity>
			</View>
			<View style={styles.detail}>
				<View style={styles.detailWrapper}>
					<BlurView>
						<View style={styles.detailInner}>
							<View>
								<Text style={styles.coffeeName}>{coffee.name}</Text>
								<Text style={styles.included}>{coffee.included}</Text>
								<View style={styles.rating}>
									<Icon name='star' size={SPACING * 1.5} color={COLORS.primary} />
									<Text style={styles.rate}>{coffee.rating}</Text>
								</View>
							</View>
							<View style={styles.info}>
								<View style={styles.infoInner}>
									<View style={styles.coffee}>
										<Icon name='cafe' size={SPACING * 2} color={COLORS.primary} />
										<Text style={styles.coffeeText}>Coffee</Text>
									</View>
									<View style={styles.coffee}>
										<Icon name='water' size={SPACING * 2} color={COLORS.primary} />
										<Text style={styles.coffeeText}>Milk</Text>
									</View>
								</View>
								<View style={styles.roasted}>
									<Text style={styles.roastedTitle}>Medium roasted</Text>
								</View>
							</View>
						</View>
					</BlurView>
				</View>
			</View>
		</ImageBackground>
	);
};

export default Detail;

const styles = StyleSheet.create({
	container: {
		height: height / 2 + SPACING * 2,
		justifyContent: 'space-between',
	},
	bg: {
		borderRadius: SPACING * 3,
	},
	inner: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: SPACING * 2,
	},
	back: {
		backgroundColor: COLORS.dark,
		padding: SPACING,
		borderRadius: SPACING * 1.5,
	},
	favorite: {
		backgroundColor: COLORS.dark,
		padding: SPACING,
		borderRadius: SPACING * 1.5,
	},
	detail: {
		borderRadius: SPACING * 3,
		overflow: 'hidden',
	},
	detailWrapper: {
		padding: SPACING * 2,
	},
	detailInner: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	coffeeName: {
		fontSize: SPACING * 2,
		color: COLORS.white,
		fontWeight: '600',
		marginBottom: SPACING,
	},
	included: {
		fontSize: SPACING * 1.8,
		color: COLORS['white-smoke'],
		fontWeight: '500',
		marginBottom: SPACING,
	},
	rating: {
		flexDirection: 'row',
		marginTop: SPACING,
	},
	rate: {
		color: COLORS.white,
		marginLeft: SPACING,
	},
	info: {
		width: '35%',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	infoInner: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	coffee: {
		padding: SPACING / 2,
		width: SPACING * 5,
		height: SPACING * 5,
		backgroundColor: COLORS.dark,
		borderRadius: SPACING,
		justifyContent: 'center',
		alignItems: 'center',
	},
	coffeeText: {
		color: COLORS['white-smoke'],
		fontSize: SPACING,
	},
	roasted: {
		backgroundColor: COLORS.dark,
		padding: SPACING / 2,
		borderRadius: SPACING / 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	roastedTitle: {
		color: COLORS['white-smoke'],
		fontSize: SPACING * 1.3,
	},
});
