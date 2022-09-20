import React, { useEffect } from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import useInterval from 'use-interval';

// Styles
import theme from '../styles/styles.theme';

// Actions
import {
  getAuthUserDetails,
  getUnreadNotifications,
} from '../actions/userActions';

import HomeScreenNavigator from './HomeScreenNavigator';
import ProfileNavigator from './ProfileNavigator';
import DashboardNavigator from './DashboardNavigator';
import MessagesNavigator from './MessagesNavigator';
import SearchNavigator from './SearchNavigator';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

const NewNotificationsBadge = () => {
  <Entypo name="dot-single" size={24} color="black" style={{ right: 5 }} />;
};

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  // Hooks
  const dispatch = useDispatch();

  const { unreadNotifications } = useSelector(
    (state) => state.unreadNotifications
  );

  const { success: successViewNotification } = useSelector(
    (state) => state.userViewNotification
  );

  // dispatches every 60 seconds
  useInterval(() => {
    dispatch(getUnreadNotifications());
  }, 60000);

  useEffect(() => {
    dispatch(getUnreadNotifications());
    dispatch(getAuthUserDetails());
  }, [dispatch, successViewNotification]);

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Dashboard') {
            iconName = focused ? 'file-tray-full' : 'file-tray-full-outline';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'mail-open' : 'mail-open-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          return (
            <Ionicons name={iconName} size={27} color={theme.LIGHT_GRAY} />
          );
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.DARK_MODE,
          paddingTop: 5,
          borderTopColor: 'transparent',
        },
      })}
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreenNavigator}
        options={{
          headerShown: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          headerTitle: 'Profile',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          tabBarBadge: unreadNotifications,
          tabBarBadgeStyle: {
            backgroundColor: theme.PRIMARY_COLOR,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
