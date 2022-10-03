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
  buyerId,
}) => {
  const handleNavigation = (e) => {
    console.log(e);
  };

  const handleResponse = (data) => {
    console.log(data);
    const { loading, url } = data;
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
          // onMessage={(e) => handleMessage(e)}
          onNavigationStateChange={(data) => handleResponse(data)}
          javaScriptEnabled
          // injectedJavaScript={`document.paypalForm.submit()`}
          thirdPartyCookiesEnabled
          startInLoadingState={true}
          renderLoading={renderLoadingSpinner}
        />
      </View>
    </View>
  );
};

export default PayPalOrderModal;
