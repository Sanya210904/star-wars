import React from 'react';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './src/store';
import HeroDetails from './src/screens/HeroDetailsScreen/HeroDetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import AppRouter from './src/router/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
