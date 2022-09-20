import React from 'react';
import { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

// Styles
import theme from '../styles/styles.theme';

// Actions
import { viewNotifications } from '../actions/userActions';

export const HeaderClose = () => {
  return (
    <View style={{ marginLeft: 15 }}>
      <Ionicons name="close-outline" size={27} color={theme.LIGHT_GRAY} />
    </View>
  );
};

export const HeaderBack = () => {
  return (
    <View style={{ marginLeft: 15 }}>
      <Ionicons
        name="chevron-back-outline"
        size={28}
        color={theme.LIGHT_GRAY}
      />
    </View>
  );
};

export const HeaderNotification = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { userDetails } = useSelector((state) => state.authUserDetails);

  const navigateToNotifications = () => {
    dispatch(viewNotifications(userDetails.notifications));
    navigation.navigate('Notifications');
  };

  return (
    <View style={{ marginLeft: 15 }}>
      <TouchableOpacity activeOpacity={0.8} onPress={navigateToNotifications}>
        <Ionicons name="ios-notifications" size={25} color={theme.LIGHT_GRAY} />
      </TouchableOpacity>
    </View>
  );
};

export const HeaderConfirm = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginRight: 15 }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="checkmark-sharp" size={25} color={theme.LIGHT_GRAY} />
      </TouchableOpacity>
    </View>
  );
};

export const HeaderPurchased = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginRight: 15 }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Purchased')}
      >
        <Ionicons name="receipt-outline" size={24} color={theme.LIGHT_GRAY} />
      </TouchableOpacity>
    </View>
  );
};
