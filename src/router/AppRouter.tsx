import {HomeScreen, HeroDetails} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: '#fff',
        statusBarColor: '#fff',
        statusBarStyle: 'dark',
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="heroDetails" component={HeroDetails} />
    </Stack.Navigator>
  );
};

export default AppRouter;
