import React, { useEffect } from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

// Styles
import theme from '../styles/styles.theme';

// Screens
import SearchScreen from '../screens/SearchScreen';

// Actions

import HomeScreenNavigator from './HomeScreenNavigator';
import ProfileNavigator from './ProfileNavigator';
import DashboardNavigator from './DashboardNavigator';
import MessagesNavigator from './MessagesNavigator';

// Actions
import { getNotifications, getAuthUserDetails } from '../actions/userActions';

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

  // User info from redux state
  const { unreadNotifications } = useSelector((state) => state.notifications);
  const { success: successViewNotification } = useSelector(
    (state) => state.userViewNotification
  );
  const { id: userId } = useSelector((state) => state.userSignIn);

  useEffect(() => {
    dispatch(getNotifications(userId));
    dispatch(getAuthUserDetails(userId));
  }, [dispatch, userId, successViewNotification]);

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
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: true,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
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
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
