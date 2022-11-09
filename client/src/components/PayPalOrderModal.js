import axios from 'axios';
import geared from '../api/geared';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

const PAYPAL_SERVER_URL = 'http://localhost:5000/api/paypal/createorder';

// Styles
import styles from '../styles/PayPalOrderModalStyles';
import theme from '../styles/styles.theme';

const PayPalOrderModal = ({
  hideModal,
  setOrderStatus,
  username,
  postId,
  productImage,
  description,
  itemPrice,
  sellerId,
}) => {
  const { authToken } = useSelector((state) => state.userSignIn);

  const handleNavigation = (e) => {
    console.log(e);
  };

  const handleResponse = async (data) => {
    const { loading, url } = data;
    console.log(data);

    // Create new order
    // if (!loading && url.includes('createorder')) {
    //   try {
    //     const config = {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${authToken}`,
    //       },
    //     };
    //     console.log('TRYING TO SEND POST REQUEST');
    //     await geared.get(
    //       `/api/paypal/createorder`,
    //       {
    //         username,
    //         postId,
    //         productImage,
    //         description,
    //         itemPrice,
    //         sellerId,
    //       },
    //       config
    //     );
    //     console.log('SENT POST REQUEST');
    //   } catch (error) {
    //     console.log('CREATE ORDER ERROR FROM CLIENT');
    //     console.log(error);
    //   }
    // }

    // Redirect to success page or cancel order
    if (!loading && url.includes('success')) {
      // close modal, set status to complete
      setOrderStatus('Complete');
      hideModal();
      // todo - navigate to order conformation screen
    } else if (!loading && url.includes('cancel')) {
      // close modal, set status to canceled
      setOrderStatus('Cancelled');
      hideModal();
    } else {
      return;
    }
  };

  const renderLoadingSpinner = () => {
    return (
      <View style={styles.centeredModal}>
        <ActivityIndicator color={theme.DARK_MODE} />
      </View>
    );
  };

  return (
    <View style={styles.screenView}>
      <View style={styles.modalView}>
        <WebView
          source={{ uri: PAYPAL_SERVER_URL }}
          containerStyle={styles.webViewContainer}
          onNavigationStateChange={(data) => handleResponse(data)}
          javaScriptEnabled
          thirdPartyCookiesEnabled
          startInLoadingState={true}
          renderLoading={renderLoadingSpinner}
        />
      </View>
    </View>
  );
};

export default PayPalOrderModal;
