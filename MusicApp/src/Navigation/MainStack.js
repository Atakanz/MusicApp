import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {BottomTab} from './BottomTab'
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../Management/Features/User/userSlice';
import SignIn from '../Pages/SignIn/SignIn'
import SignUp from '../Pages/SignUp/SignUp';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export const MainStack = () => {


  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const getSavedItem = async () => {
    let userData = await AsyncStorage.getItem('savedUser');
    const _user = userData ? JSON.parse(userData) : null;
    dispatch(setUser(_user));
    // loading is set to true by default, but when the user is found stop the loading
  };
  
  useEffect(() => {
    getSavedItem();
  }, [user]);
 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
  {!user ? (
    <>
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
    </>
  ) : (
    <>
      <Stack.Screen name='BottomTab' component={BottomTab} />
    </>
  )}
  </Stack.Navigator>
  </NavigationContainer>
  )
};

export default MainStack;