import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

// Styles
import styles from '../styles/PurchasedCardStyles';
import theme from '../styles/styles.theme';

const PurchasedCard = ({
  username,
  profileImage,
  orderStatus,
  purchasedDate,
  itemImage,
}) => {
  const navigation = useNavigation();

  // Redux state
  const { _id: authUserId } = useSelector((state) => state.userSignIn.userInfo);

  const handleNavigate = () => {
    navigation.navigate('OrderReceipt', {
      // userId: followerId,
      // num: Math.floor(100000 + Math.random() * 900000),
    });
  };

  return (
    <TouchableOpacity onPress={handleNavigate} activeOpacity={0.8}>
      <View style={styles.container}>
        <View style={styles.leftCardContainer}>
          <Image style={styles.profileImage} source={{ uri: profileImage }} />

          <View style={styles.orderDetailsContainer}>
            <Text style={{ fontSize: 15 }}>
              From <Text style={styles.username}>{username}</Text>
            </Text>
            <Text style={styles.orderStatus}>{orderStatus}</Text>
            <Text style={styles.purchasedDate}>{purchasedDate}</Text>
          </View>
        </View>

        <Image style={styles.itemImage} source={{ uri: itemImage }} />
      </View>
    </TouchableOpacity>
  );
};

export default PurchasedCard;
