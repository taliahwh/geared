import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';

const paypalScriptSource = require('../paypal/paypal.html');

// Styles
import styles from '../styles/PayPalOrderModalStyles';
import theme from '../styles/styles.theme';

const PayPalOrderModal = ({ hideModal }) => {
  const handleNavigation = (e) => {
    console.log(e);
  };

  const handleMessage = (e) => {
    console.log(e);
  };

  return (
    <View style={styles.screenView}>
      <View style={styles.modalView}>
        <View style={styles.header}>
          <Pressable onPress={hideModal}>
            <Ionicons name="close" size={20} color={theme.MEDIUM_GRAY} />
          </Pressable>

          <Ionicons name="close" size={20} color="transparent" />
        </View>
        <WebView
          source={paypalScriptSource}
          containerStyle={styles.webViewContainer}
          onMessage={(e) => handleMessage(e)}
          onNavigationStateChange={(e) => handleNavigation(e)}
          javaScriptEnabled
          thirdPartyCookiesEnabled
        />
      </View>
    </View>
  );
};

export default PayPalOrderModal;
