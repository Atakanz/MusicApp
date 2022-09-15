import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {BottomTab} from './BottomTab'
import SignIn from '../Pages/SignIn/SignIn'
import SignUp from '../Pages/SignUp/SignUp';
import PlayList from '../Pages/PlayListPage/PlayList';
import {firebase} from '../../config';

const Stack = createNativeStackNavigator();

export const MainStack = () => {


   const [initializing, setInitializing] = useState(true);
   const [user, setUser] = useState();

   function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
   }

useEffect(() => {
  const subscriber = 
  firebase.auth().onAuthStateChanged(onAuthStateChanged);
  return subscriber;
}, []);

  if (initializing) return null;
  // console.log(user)

  if (!user) {
  return ( 
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='BottomTab' component={BottomTab} />
      <Stack.Screen options={{headerShown:true}} name='Songs' component={PlayList} />
    </Stack.Navigator>
  </NavigationContainer> 
  )
  } 
   
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='BottomTab' component={BottomTab} />
      <Stack.Screen options={{headerShown:true}} name='Songs' component={PlayList} />
    </Stack.Navigator>
  </NavigationContainer> 
  )
  
};

export default MainStack;