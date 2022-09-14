import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../Pages/Search';
import GenreList from '../Pages/Genres/Genres';

const Stack = createNativeStackNavigator();

export const SearchGenreStack = () => (
	<Stack.Navigator>
		<Stack.Screen name='Search' component={Search} />
		<Stack.Screen name='GenreList' component={GenreList} />
	</Stack.Navigator>
);

export default SearchGenreStack;
