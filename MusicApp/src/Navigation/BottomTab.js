import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../Pages/Home/Home';
import ProfileStack from './ProfileStack';
import SearchGenreStack from './SearchGenreStack';
const Tab = createBottomTabNavigator();

export const BottomTab = () => (
	<Tab.Navigator>
		<Tab.Screen name='Home' component={Home} />
		<Tab.Screen name='SearchGenreStack' component={SearchGenreStack} />
		<Tab.Screen name='ProfileStack' component={ProfileStack} />
	</Tab.Navigator>
);
