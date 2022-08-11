import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpDetailsScreen from '../screens/SignUpDetailsScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator options={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignUpScreen}
        options={{
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sign Up Details"
        component={SignUpDetailsScreen}
        options={{
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
