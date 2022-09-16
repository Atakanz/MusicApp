import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStack from './HomeStack';
import GenreStack from './GenreStack';
import ProfileStack from './ProfileStack';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {Pressable} from 'react-native';

const Tab = createBottomTabNavigator();
const editProfile = <Icon name="pencil-outline" size={30} 
    color="darkgray" style={{marginRight: 15}} />

export const BottomTab = ({navigation}) => (
	<Tab.Navigator>
		<Tab.Screen name='Home' component={HomeStack} />
		<Tab.Screen name='Search' component={GenreStack} />
		<Tab.Screen name='Profile' component={ProfileStack} 
		options={{headerRight: () => 
			(<Pressable onPress={() => navigation.navigate("Settings")}>{editProfile}</Pressable>)}} 
             />
	</Tab.Navigator>
);
