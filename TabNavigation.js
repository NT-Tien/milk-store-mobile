import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import HomeScreen from './screens/HomeScreen';
import Category from './screens/Categories';
import Promotion from './screens/Promotions';
import Market from './screens/Market';
import Account from './screens/Account';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'list'
                                : 'list'
                        } else if (route.name === 'Category') {
                            iconName = 'heart-sharp';
                            // color = 'gray;'
                        } else if (route.name === 'Promotion') {
                            iconName = 'heart-sharp';
                            // color = 'gray;'
                        }
                        else if (route.name === 'Market') {
                            iconName = 'heart-sharp';
                            // color = 'gray;'
                        }
                        else if (route.name === 'Account') {
                            iconName = 'heart-sharp';
                            // color = 'gray;'
                        }

                        return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                    },
                    headerShown: false,
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray'
                })}>
                <Tab.Screen name='Home' component={HomeScreen} ></Tab.Screen>
                <Tab.Screen name='Category' component={Category}></Tab.Screen>
                <Tab.Screen name='Promotion' component={Promotion}></Tab.Screen>
                <Tab.Screen name='Market' component={Market}></Tab.Screen>
                <Tab.Screen name='Account' component={Account}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({})