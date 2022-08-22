import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// Assets
import paypalImg from '../assets/paypal-background.png';

// Styles
import styles from '../styles/ConnectPayPalScreenStyles';

const ConnectPayPalScreen = () => {
  const connectToPayPal = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sell safely inside Geared</Text>

      <Text style={styles.bodyText}>Your PayPal is not connected yet.</Text>
      <View style={styles.spacer} />
      <Text style={styles.bodyText}>
        Please connect your PayPal account to start listing items for sale and
        receiving secure payments.
      </Text>

      {/* Connected Msg */}
      {/* <Text style={styles.bodyText}>You've connected your PayPal!</Text>
      <View style={styles.spacer} />
      <Text style={styles.bodyText}>
        This means that you can list items for sale and receive secure payments
        straight to your PayPal.
      </Text> */}
      <Image
        source={{
          uri: 'https://1000logos.net/wp-content/uploads/2017/05/emblem-Paypal.jpg',
        }}
        style={styles.backgroundImage}
      />
      <TouchableOpacity onPress={connectToPayPal} activeOpacity={0.8}>
        <Text style={styles.paypalBtn}>CONNECT PAYPAL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConnectPayPalScreen;
