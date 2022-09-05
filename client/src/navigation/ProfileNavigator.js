import { createStackNavigator } from '@react-navigation/stack';

// Screens
import ProfileScreen from '../screens/ProfileScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import CommentsScreen from '../screens/CommentsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import FollowersScreen from '../screens/FollowersScreen';
import FollowingScreen from '../screens/FollowingScreen';
import ViewUserProfileScreen from '../screens/ViewUserProfileScreen';
import PurchasedScreen from '../screens/PurchasedScreen';
import OrderReceiptScreen from '../screens/OrderReceiptScreen';

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
          headerRight: () => <HeaderPurchased />,
          headerTitle: '',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: theme.DARK_MODE,
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
          },
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
