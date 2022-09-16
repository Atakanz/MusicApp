import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../Pages/Search';
import TrackListGenre from '../Pages/TrackListGenre/TrackListGenre';

const Stack = createNativeStackNavigator();

export const GenreStack = () => (
	<Stack.Navigator screenOptions={{headerShown:false}}>
		<Stack.Screen 
        name='SearchPage' 
        component={Search} />
		<Stack.Screen 
        name='TrackListGenre' 
        component={TrackListGenre} />
	</Stack.Navigator>
);

export default GenreStack;