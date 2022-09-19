import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';

import DashboardScreen from '../screens/DashboardScreen';
import CreateListingScreen from '../screens/CreateListingScreen';
import ConnectPayPalScreen from '../screens/ConnectPayPalScreen';
import SoldItemsScreen from '../screens/SoldItemsScreen';

import { HeaderBack } from '../components/HeaderBackImages';

// Styles
import theme from '../styles/styles.theme';

const Stack = createStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator options={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          headerTitle: 'Dashboard',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: theme.DARK_MODE,
          },
          headerTitleStyle: {
            color: theme.LIGHT_GRAY,
          },
        }}
      />
      <Stack.Screen
        name="Listing"
        component={CreateListingScreen}
        options={{
          headerTitle: 'Create Listing',
          headerBackTitleVisible: false,
          headerBackImage: HeaderBack,
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerTitleStyle: {
            color: theme.LIGHT_GRAY,
          },
          headerStyle: {
            backgroundColor: theme.DARK_MODE,
            borderColor: theme.MEDIUM_GRAY,
          },
          headerTitleStyle: {
            fontWeight: '700',
            color: theme.LIGHT_GRAY,
          },
        }}
      />
      <Stack.Screen
        name="ConnectPayPal"
        component={ConnectPayPalScreen}
        options={{
          headerTitle: 'PayPal',
          headerBackTitleVisible: false,
          headerBackImage: HeaderBack,
          headerTitleStyle: {
            color: theme.LIGHT_GRAY,
          },
          headerStyle: {
            backgroundColor: theme.DARK_MODE,
          },
        }}
      />
      <Stack.Screen
        name="SoldItems"
        component={SoldItemsScreen}
        options={{
          headerTitle: 'All sold items',
          headerBackTitleVisible: false,
          headerBackImage: HeaderBack,
          headerTitleStyle: {
            color: theme.LIGHT_GRAY,
          },
          headerStyle: {
            backgroundColor: theme.DARK_MODE,
          },
          headerTitleStyle: {
            color: theme.LIGHT_GRAY,
            fontWeight: '700',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
