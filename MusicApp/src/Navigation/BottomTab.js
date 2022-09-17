import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStack from './HomeStack';
import GenreStack from './GenreStack';
import ProfileStack from './ProfileStack';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();
const editProfile = <Icon name="pencil-outline" size={30} 
    color="darkgray" style={{marginRight: 15}} />


export const BottomTab = ({navigation}) => {
	const theme = useSelector(state => state.theme.theme);
    const colorSelect = theme === 'Dark' ? '#fff' : '#212121';
	return (
	<Tab.Navigator screenOptions={{
        headerTintColor: theme === 'Dark' ? '#fff' : '#212121',
        headerStyle: {
          backgroundColor: theme === 'Dark' ? '#212121' : '#20b2aa',
        },
        tabBarInactiveBackgroundColor: theme === 'Dark' ? '#212121' : '#fff',
        tabBarActiveBackgroundColor: theme === 'Dark' ? '#212121' : '#fff',
      }} >
		<Tab.Screen 
		name='Home' 
		component={HomeStack} 
		options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={colorSelect} size={30} />
          ),
        }} />
		<Tab.Screen 
		name='Search' 
		component={GenreStack} 
		options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="magnify" color={colorSelect} size={30} />
          ),
        }} />
		<Tab.Screen 
		name='Profile' 
		component={ProfileStack} 
		options={{headerRight: () => 
			(<Pressable onPress={() => navigation.navigate("Settings")}>{editProfile}</Pressable>),
			tabBarIcon: ({color, size}) => (
				<Icon name="account" color={colorSelect} size={30} />
			  ),
			}}
             />
	</Tab.Navigator>
);
}
