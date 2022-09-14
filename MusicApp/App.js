import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {BottomTab} from './src/Navigation/BottomTab';
import SignIn from './src/Pages/SignIn';
import SignUp from './src/Pages/SignUp';

const Stack = createNativeStackNavigator();

export const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='BottomTab' component={BottomTab} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
