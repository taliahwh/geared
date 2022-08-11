import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import MessagesScreen from '../screens/MessagesScreen';
import ChatScreen from '../screens/ChatScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import TestScreen from '../screens/TestScreen';

import {
  HeaderBack,
  HeaderClose,
  HeaderNotification,
} from '../components/HeaderBackImages';

const Stack = createStackNavigator();

const MessagesNavigator = () => {
  return (
    <Stack.Navigator
      options={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={MessagesScreen}
        options={{
          headerTitle: 'Messages',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 1,
            borderBottomWidth: 0.5,
          },
          headerBackTitle: false,
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Test"
        component={TestScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MessagesNavigator;
