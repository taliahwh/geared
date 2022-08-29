import React from 'react';
import { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

export const HeaderClose = () => {
  return (
    <View style={{ marginLeft: 15 }}>
      <Ionicons name="close-outline" size={28} color="black" />
    </View>
  );
};

export const HeaderBack = () => {
  return (
    <View style={{ marginLeft: 15 }}>
      <Ionicons name="chevron-back-outline" size={28} color="black" />
    </View>
  );
};

export const HeaderNotification = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginLeft: 15 }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Notifications')}
      >
        <Ionicons name="ios-notifications" size={25} color="black" />
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
        <Ionicons name="checkmark-sharp" size={25} color="black" />
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
        <Ionicons name="receipt-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};
