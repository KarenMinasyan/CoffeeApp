import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, SCREENS } from 'src/helpers/constants';
import CoffeeDetailScreen from 'src/screens/CoffeeDetailScreen';
import HomeScreen from 'src/screens/HomeScreen';
import { RootStackParamList } from 'src/types';

const { dark } = COLORS;
const { HOME, DETAIL } = SCREENS;
const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthenticatedStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false, contentStyle: { backgroundColor: dark } }}
		>
			<Stack.Screen name={HOME} component={HomeScreen} />
			<Stack.Screen name={DETAIL} component={CoffeeDetailScreen} />
		</Stack.Navigator>
	);
};

export default AuthenticatedStack;
