import React, { useEffect, useState, useRef } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/store';
import { LogBox } from 'react-native';
import * as Notifications from 'expo-notifications';

// Helper Functions
import getNotificationsPermission from './src/utils/getNotificationsPermission';

// Components
import Loader from './src/components/Loaders/Loader';

// Actions
import { savePushToken } from './src/actions/userActions';

// Navigators
import { navigationRef } from './src/navigation/RootNavigation';
import MainNavigator from './src/navigation/MainNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

const App = () => {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.userSignIn);
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    LogBox.ignoreLogs([
      `ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.`,
    ]);

    // Gets permission for notifications and sets pushToken in user model
    const getToken = async () => {
      try {
        const response = await getNotificationsPermission();
        console.log(response);
        dispatch(savePushToken(response));
      } catch (error) {
        console.log(error);
      }
    };

    getToken();

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });
    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(() => {});

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {authToken === null ? <AuthNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store} loading={Loader}>
      <PersistGate persistor={persistor}>
        <MenuProvider>
          <App />
        </MenuProvider>
      </PersistGate>
    </Provider>
  );
};

export default AppWrapper;
