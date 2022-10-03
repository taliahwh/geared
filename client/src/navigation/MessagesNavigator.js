import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import MessagesScreen from '../screens/MessagesScreen';
import ChatScreen from '../screens/ChatScreen';
import TestScreen from '../screens/TestScreen';

import {
  HeaderBack,
  HeaderClose,
  HeaderNotification,
} from '../components/HeaderBackImages';

// Styles
import theme from '../styles/styles.theme';

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
            shadowOpacity: 0,
            borderBottomWidth: 0,
            borderColor: theme.DARK_MODE_BORDER,
            backgroundColor: theme.DARK_MODE,
          },
          headerTitleStyle: { color: theme.LIGHT_GRAY, fontWeight: '700' },
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
      <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
  );
};

export default MessagesNavigator;
