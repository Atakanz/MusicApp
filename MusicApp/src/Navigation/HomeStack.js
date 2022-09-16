import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Pages/Home/Home';
import TrackListPlaylist from '../Pages/TrackListPlaylist/TrackListPlaylist';


const Stack = createNativeStackNavigator();

export const HomeStack = () => (
	<Stack.Navigator screenOptions={{headerShown:false}}>
		<Stack.Screen 
        name='HomePage' 
        component={Home} />
		<Stack.Screen 
        name='TrackListPlaylist' 
        component={TrackListPlaylist} />
	</Stack.Navigator>
);

export default HomeStack;