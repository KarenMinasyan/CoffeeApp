import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { COLORS } from 'src/helpers/constants';
import Navigation from 'src/navigations';
import { store } from 'src/store/store';

const App = () => (
	<Provider store={store}>
		<View style={styles.container}>
			<Navigation />
		</View>
	</Provider>
);

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.dark,
	},
});
