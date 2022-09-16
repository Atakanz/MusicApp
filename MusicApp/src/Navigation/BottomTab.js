import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStack from './HomeStack';
import GenreStack from './GenreStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export const BottomTab = () => (
	<Tab.Navigator>
		<Tab.Screen name='Home' component={HomeStack} />
		<Tab.Screen name='Search' component={GenreStack} />
		<Tab.Screen name='Profile' component={ProfileStack} />
	</Tab.Navigator>
);
