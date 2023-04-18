import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import HomeScreen from "../../screens/HomeScreen";
import CoffeeDetailScreen from "../../screens/CoffeeDetailScreen";
import { COLORS, SCREENS } from "../../helpers/constants";

const { HOME, DETAIL } = SCREENS;
const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthenticatedStack = () => {

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, contentStyle: { backgroundColor: COLORS.dark } }}
    >
      <Stack.Screen name={HOME} component={HomeScreen} />
      <Stack.Screen name={DETAIL} component={CoffeeDetailScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
