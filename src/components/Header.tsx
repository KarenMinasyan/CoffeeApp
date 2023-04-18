import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';

import { COLORS, SPACING } from '../helpers/constants';

const Header = () => (
	<View style={styles.header}>
		<TouchableOpacity style={styles.menu}>
			<BlurView overlayColor={'#1f2126'}>
				<View style={styles.menuWrapper}>
					<Icon name='menu' size={SPACING * 2.5} color={COLORS.secondary} />
				</View>
			</BlurView>
		</TouchableOpacity>
		<View style={styles.user}>
			<BlurView overlayColor={'#1f2126'}>
				<View style={styles.userWrapper}>
					<Image style={styles.img} source={require('../assets/avatar.jpg')} />
				</View>
			</BlurView>
		</View>
	</View>
);

export default Header;

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	menu: {
		width: SPACING * 4,
		height: SPACING * 4,
		borderRadius: SPACING,
		overflow: 'hidden',
	},
	menuWrapper: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	user: {
		width: SPACING * 4,
		height: SPACING * 4,
		overflow: 'hidden',
		borderRadius: SPACING * 2,
	},
	userWrapper: {
		height: '100%',
		padding: SPACING / 2,
	},
	img: {
		height: '100%',
		width: '100%',
		borderRadius: SPACING * 2,
	},
});
