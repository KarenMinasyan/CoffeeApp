import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Detail from 'src/components/Detail';
import Footer from 'src/components/Footer';
import Info from 'src/components/Info';
import { findCoffeeByIdSelector } from 'src/helpers/reduxSelectors';
import { useAppSelector } from 'src/hook';

const CoffeeDetailScreen = () => {
	const coffee = useAppSelector(findCoffeeByIdSelector);
	return (
		<>
			{coffee?.id && (
				<>
					<ScrollView>
						<SafeAreaView>
							<Detail coffee={coffee} />
							<Info coffee={coffee} />
						</SafeAreaView>
					</ScrollView>
					<Footer coffee={coffee} />
				</>
			)}
		</>
	);
};

export default CoffeeDetailScreen;
