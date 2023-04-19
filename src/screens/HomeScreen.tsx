import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS, SPACING } from 'src/helpers/constants';
import SearchField from 'src/components/SearchField';
import Categories from 'src/components/Categories';
import Header from 'src/components/Header';
import Coffees from 'src/components/Coffees';

const HomeScreen = () => {
	const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
	return (
		<SafeAreaView>
			<ScrollView style={styles.home}>
				<Header />
				<View style={styles.header}>
					<Text style={styles.title}>Find the best coffee for you</Text>
				</View>
				<SearchField />
				<Categories onChange={(id: number) => setActiveCategoryId(id)} />
				<Coffees activeCategoryId={activeCategoryId} />
			</ScrollView>
		</SafeAreaView>
	);
};

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
