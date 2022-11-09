import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';

// Screens
import ProfileScreen from '../screens/ProfileScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import CommentsScreen from '../screens/CommentsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import FollowersScreen from '../screens/FollowersScreen';
import FollowingScreen from '../screens/FollowingScreen';
import ViewUserProfileScreen from '../screens/ViewUserProfileScreen';
import PurchasedScreen from '../screens/PurchasedScreen';
import ChatScreen from '../screens/ChatScreen';
import OrderReceiptScreen from '../screens/OrderReceiptScreen';
import EditListingScreen from '../screens/EditListingScreen';

// Components
import {
  HeaderBack,
  HeaderNotification,
  HeaderPurchased,
} from '../components/HeaderBackImages';

// Styles
import theme from '../styles/styles.theme';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator options={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{
          headerLeft: () => <HeaderNotification />,
          // headerRight: () => <HeaderPurchased />,
          headerTitle: '',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: theme.DARK_MODE,
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
          headerStyle: {
            backgroundColor: theme.DARK_MODE,
          },
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerTitle: 'Notifications',
          headerBackTitleVisible: false,
          headerBackImage: HeaderBack,
          headerStyle: {
            backgroundColor: theme.DARK_MODE,
            borderColor: theme.DARK_MODE_BORDER,
          },
          headerTitleStyle: {
            color: theme.LIGHT_GRAY,
            fontWeight: '700',
          },
        }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerTitle: 'Comments',
          headerBackTitleVisible: false,
          headerBackImage: HeaderBack,
          headerStyle: {
            backgroundColor: theme.DARK_MODE,
          },
          headerTitleStyle: {
            color: theme.LIGHT_GRAY,
            fontWeight: '700',
          },
        }}
      />
      <Stack.Screen
        name="Followers"
        component={FollowersScreen}
        options={{
          headerTitle: 'Followers',
          headerBackTitleVisible: false,
          headerBackImage: HeaderBack,
          headerStyle: {
            backgroundColor: theme.DARK_MODE,
          },
          headerTitleStyle: {
            color: theme.LIGHT_GRAY,
            fontWeight: '700',
          },
        }}
      />
      <Stack.Screen
        name="Following"
        component={FollowingScreen}
        options={{
          headerTitle: 'Following',
          headerBackTitleVisible: false,
          headerBackImage: HeaderBack,
          headerStyle: {
            backgroundColor: theme.DARK_MODE,
          },
          headerTitleStyle: {
            color: theme.LIGHT_GRAY,
            fontWeight: '700',
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
            backgroundColor: theme.DARK_MODE,
          },
        }}
      />
      <Stack.Screen
        name="Purchased"
        component={PurchasedScreen}
        options={{
          headerTitle: 'Purchased',
          headerBackTitleVisible: false,
          headerBackImage: HeaderBack,
          headerStyle: {
            backgroundColor: theme.DARK_MODE,
            borderColor: theme.DARK_MODE_BORDER,
          },
          headerTitleStyle: {
            color: theme.LIGHT_GRAY,
            fontWeight: '700',
          },
        }}
      />
      <Stack.Screen
        name="EditListing"
        component={EditListingScreen}
        options={{
          headerTitle: 'Edit Listing',
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
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="OrderReceipt"
        component={OrderReceiptScreen}
        options={{
          headerTitle: 'Purchase',
          headerBackTitleVisible: false,
          headerBackImage: HeaderBack,
          headerStyle: {
            borderColor: theme.DARK_MODE_BORDER,
            borderWidth: 0.3,
            backgroundColor: theme.DARK_MODE,
          },
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
