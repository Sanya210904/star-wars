import {colors} from '@app/styles/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './constants/routes';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.navigationBarColor,
        statusBarColor: colors.statusBarColor,
        statusBarStyle: 'dark',
      }}>
      {routes.map(route => (
        <Stack.Screen key={route.name} {...route} />
      ))}
    </Stack.Navigator>
  );
};

export default AppRouter;
