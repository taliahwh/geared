import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ViewUserProfileScreen from '../screens/ViewUserProfileScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import CommentsScreen from '../screens/CommentsScreen';
import FollowingScreen from '../screens/FollowingScreen';
import FollowersScreen from '../screens/FollowersScreen';
import ChatScreen from '../screens/ChatScreen';
import OfferScreen from '../screens/OfferScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ShippingAddressScreen from '../screens/ShippingAddressScreen';
import ConfirmShippingScreen from '../screens/ConfirmShippingScreen';
import OrderConfirmationScreen from '../screens/OrderConfirmationScreen';
import UserReviewsScreen from '../screens/UserReviewsScreen';
import ReportPostScreen from '../screens/ReportPostScreen';

import {
  HeaderBack,
  HeaderClose,
  HeaderConfirm,
} from '../components/HeaderBackImages';

// Styles
import theme from '../styles/styles.theme';

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
              backgroundColor: theme.DARK_MODE,
            },
            headerTitleStyle: {
              color: theme.LIGHT_GRAY,
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
            headerBackImage: HeaderBack,
            headerBackTitleVisible: false,
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
          name="Chat"
          component={ChatScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditShippingAddress"
          component={ShippingAddressScreen}
          options={{
            headerTitle: 'Add new address',
            headerBackTitleVisible: false,
            headerBackImage: HeaderBack,
            headerTitleStyle: {
              fontWeight: '700',
              color: theme.LIGHT_GRAY,
            },
            headerStyle: {
              backgroundColor: theme.DARK_MODE,
            },
          }}
        />
        <Stack.Screen
          name="ConfirmShipping"
          component={ConfirmShippingScreen}
          options={{
            headerTitle: '',
            headerBackTitleVisible: false,
            headerBackImage: HeaderBack,
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="OrderConfirmation"
          component={OrderConfirmationScreen}
          options={{
            headerTitle: '',
            headerBackTitleVisible: false,
            headerBackImage: HeaderBack,
            headerStyle: {
              borderColor: theme.DARK_MODE_BORDER,
              // borderBottomWidth: 0.1,
              backgroundColor: theme.DARK_MODE,
            },
            headerLeft: () => null,
            headerRight: HeaderConfirm,
          }}
        />
        <Stack.Screen
          name="UserReviews"
          component={UserReviewsScreen}
          options={{
            headerTitle: 'Reviews',
            headerBackTitleVisible: false,
            headerBackImage: HeaderBack,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              backgroundColor: theme.DARK_MODE,
            },
            headerTitleStyle: {
              color: theme.LIGHT_GRAY,
              fontWeight: '700',
            },
          }}
        />
        <Stack.Screen
          name="ReportPost"
          component={ReportPostScreen}
          options={{
            headerTitle: 'Report',
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
            headerStyle: {
              backgroundColor: theme.DARK_MODE,
              borderWidth: 0,
            },
            headerTitleStyle: {
              color: theme.LIGHT_GRAY,
            },
          }}
        />
        <Stack.Screen
          name="Offer"
          component={OfferScreen}
          options={{
            headerTitle: 'Make an offer',
            headerTitleStyle: {
              fontWeight: '700',
            },
            headerBackTitleVisible: false,
            headerBackImage: HeaderClose,
            headerStyle: {
              backgroundColor: theme.FEED_BACKGROUND,
            },
            headerTitleStyle: { color: theme.LIGHT_GRAY },
          }}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{
            headerTitle: 'Checkout',
            headerTitleStyle: {
              fontWeight: '700',
              color: theme.LIGHT_GRAY,
            },
            headerBackTitleVisible: false,
            headerBackImage: HeaderClose,
            headerStyle: {
              backgroundColor: theme.DARK_MODE,
              borderColor: theme.DARK_MODE_BORDER,
              borderBottomWidth: 0.1,
            },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeScreenNavigator;
