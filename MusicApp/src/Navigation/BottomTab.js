import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../Pages/Home/Home';
import ProfileStack from './ProfileStack';
import Search from '../Pages/Search';
const Tab = createBottomTabNavigator();

export const BottomTab = () => (
	<Tab.Navigator>
		<Tab.Screen name='Home' component={Home} />
		<Tab.Screen name='Search' component={Search} />
		<Tab.Screen name='Profile' component={ProfileStack} />
	</Tab.Navigator>
);
