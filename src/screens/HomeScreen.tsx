import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Categories from 'src/components/Categories';
import Coffees from 'src/components/Coffees';
import Header from 'src/components/Header';
import SearchField from 'src/components/SearchField';
import { COLORS, SPACING } from 'src/helpers/constants';

const HomeScreen = () => (
	<SafeAreaView>
		<ScrollView style={styles.home}>
			<Header />
			<View style={styles.header}>
				<Text style={styles.title}>Find the best coffee for you</Text>
			</View>
			<SearchField />
			<Categories />
			<Coffees />
		</ScrollView>
	</SafeAreaView>
);

export default HomeScreen;

const styles = StyleSheet.create({
	home: {
		padding: SPACING,
	},
	header: {
		width: '80%',
		marginVertical: SPACING * 3,
	},
	title: {
		color: COLORS.white,
		fontSize: SPACING * 3.5,
		fontWeight: '600',
	},
});
