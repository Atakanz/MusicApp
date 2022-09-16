import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LikedSongs from '../Pages/LikedSongs';
import Settings from '../Pages/Settings';
import ThemeSettings from '../Pages/ThemeSettings';
import EditProfile from '../Pages/EditProfile';


const Stack = createNativeStackNavigator();

export const ProfileStack = () => (
	<Stack.Navigator screenOptions={{headerShown: false}} >
		<Stack.Screen name='LikedSongs' component={LikedSongs} />
		<Stack.Screen name='Settings' component={Settings} />
		<Stack.Screen name='ThemeSettings' component={ThemeSettings} />
		<Stack.Screen name='EditProfile' component={EditProfile} />
	</Stack.Navigator>
);

export default ProfileStack;
