import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Detail from 'src/components/Detail';
import Footer from 'src/components/Footer';
import Info from 'src/components/Info';

const CoffeeDetailScreen = ({ coffee }: any) => {
	return (
		<>
			<ScrollView>
				<SafeAreaView>
					<Detail coffee={coffee} />
					<Info coffee={coffee} />
				</SafeAreaView>
			</ScrollView>
			<Footer coffee={coffee} />
		</>
	);
};

export default CoffeeDetailScreen;
