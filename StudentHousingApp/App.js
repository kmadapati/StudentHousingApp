// App.js
import React from 'react';
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSignupScreen from './screens/LoginSignupScreen';
import PropertyListScreen from './screens/PropertyListScreen';
import PropertyDetailsScreen from './screens/PropertyDetailsScreen';
import CreateRoommateRequestScreen from './screens/CreateRoommateRequestScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginSignup">
        <Stack.Screen
          name="LoginSignup"
          component={LoginSignupScreen}
          options={{ title: 'Login or Signup' }}
        />
        <Stack.Screen
          name="PropertyList"
          component={PropertyListScreen}
          options={{ title: 'Properties' }}
        />
        <Stack.Screen
          name="PropertyDetail"
          component={PropertyDetailsScreen}
          options={{ title: 'Property Details' }}
        />
        <Stack.Screen
          name="CreateRoommateRequest"
          component={CreateRoommateRequestScreen}
          options={{ title: 'Create Roommate Request' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Your Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
