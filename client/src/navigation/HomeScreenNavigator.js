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

import {
  HeaderBack,
  HeaderClose,
  HeaderNotification,
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
            },
            headerStyle: {
              borderColor: theme.BORDER_COLOR,
              borderWidth: 0.3,
              backgroundColor: '#F4F4F4',
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
              borderColor: theme.BORDER_COLOR,
              borderWidth: 0.3,
              backgroundColor: '#F4F4F4',
            },
          }}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{
            headerTitle: 'Checkout',
            headerTitleStyle: {
              fontWeight: '700',
            },
            headerBackTitleVisible: false,
            headerBackImage: HeaderClose,
            headerStyle: {
              borderColor: theme.BORDER_COLOR,
              borderWidth: 0.3,
            },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeScreenNavigator;
