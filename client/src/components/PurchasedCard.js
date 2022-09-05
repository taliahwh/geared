import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// Screens
import OrderReceiptScreen from '../screens/OrderReceiptScreen';

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
  const [purchasedItemModalVisible, setPurchasedItemModalVisible] =
    useState(false);

  // Redux state
  const { _id: authUserId } = useSelector((state) => state.userSignIn.userInfo);

  return (
    <>
      <TouchableOpacity
        onPress={() => setPurchasedItemModalVisible(true)}
        activeOpacity={0.8}
      >
        <View style={styles.container}>
          <View style={styles.leftCardContainer}>
            <Image style={styles.profileImage} source={{ uri: profileImage }} />

            <View style={styles.orderDetailsContainer}>
              <Text style={{ fontSize: 15, color: theme.LIGHT_GRAY }}>
                From <Text style={styles.username}>{username}</Text>
              </Text>
              <Text style={styles.orderStatus}>{orderStatus}</Text>
              <Text style={styles.purchasedDate}>{purchasedDate}</Text>
            </View>
          </View>

          <Image style={styles.itemImage} source={{ uri: itemImage }} />
        </View>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={purchasedItemModalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setPurchasedItemModalVisible(!purchasedItemModalVisible);
        }}
      >
        <OrderReceiptScreen
          hideModal={() => setPurchasedItemModalVisible(false)}
          // orderStatus={'shipped'}
          awatingShipment={false}
          hasShipped={false}
          delivered={true}
        />
      </Modal>
    </>
  );
};

export default PurchasedCard;
