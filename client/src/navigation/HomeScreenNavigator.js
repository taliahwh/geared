import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ViewUserProfileScreen from '../screens/ViewUserProfileScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import CommentsScreen from '../screens/CommentsScreen';
import FollowingScreen from '../screens/FollowingScreen';
import FollowersScreen from '../screens/FollowersScreen';

import {
  HeaderBack,
  HeaderClose,
  HeaderNotification,
} from '../components/HeaderBackImages';

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'Feed',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
        />
        <Stack.Screen
          name="ProfileDetails"
          component={ViewUserProfileScreen}
          options={{
            headerTitle: '',
            headerBackTitleVisible: false,
            headerBackImage: HeaderBack,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
        />
        <Stack.Screen
          name="PostDetails"
          component={PostDetailsScreen}
          options={{
            headerTitle: '',
            headerBackTitleVisible: false,
            headerBackImage: HeaderBack,
          }}
        />
        <Stack.Screen
          name="Followers"
          component={FollowersScreen}
          options={{
            headerTitle: 'Followers',
            headerBackTitleVisible: false,
            headerBackImage: HeaderBack,
          }}
        />
        <Stack.Screen
          name="Following"
          component={FollowingScreen}
          options={{
            headerTitle: 'Following',
            headerBackTitleVisible: false,
            headerBackImage: HeaderBack,
          }}
        />
        <Stack.Screen
          name="UserProfile"
          component={ProfileScreen}
          options={{
            headerTitle: () => <HeaderNotification />,
            headerBackTitleVisible: false,
            headerBackImage: HeaderBack,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              // height: 60,
            },
            // headerLeft: HeaderNotification,
          }}
        />
      </Stack.Group>

      {/* Modals */}
      <Stack.Group screenOptions={{ presentation: 'transparentModal' }}>
        <Stack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            headerTitle: 'Comments',
            headerBackTitleVisible: false,
            headerBackImage: HeaderClose,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeScreenNavigator;
