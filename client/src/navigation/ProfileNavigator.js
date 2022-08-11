import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import CommentsScreen from '../screens/CommentsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import FollowersScreen from '../screens/FollowersScreen';
import FollowingScreen from '../screens/FollowingScreen';
import ViewUserProfileScreen from '../screens/ViewUserProfileScreen';

import { HeaderBack, HeaderNotification } from '../components/HeaderBackImages';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator options={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{
          headerTitle: () => <HeaderNotification />,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          // headerLeft: HeaderNotification,
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
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerTitle: 'Notifications',
          headerBackTitleVisible: false,
          headerBackImage: HeaderBack,
        }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerTitle: 'Comments',
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
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
