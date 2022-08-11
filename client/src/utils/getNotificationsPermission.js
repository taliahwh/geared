import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import storage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

// Actions
import { savePushToken } from '../actions/userActions';

const getNotificationsPermission = async () => {
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      await storage.setItem('expopushtoken', '');
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    await storage.setItem('expopushtoken', token);
    return token;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
};

export default getNotificationsPermission;
