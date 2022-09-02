import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Styles
import styles from '../styles/OrderConfirmationScreenStyles';
import theme from '../styles/styles.theme';

const OrderConfirmationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.confirmationHeading}>It's yours</Text>
        <Text style={styles.confirmationSubheading}>
          We've let the seller know that you've bought it and it's time for
          shipping.
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="mail-outline" size={24} color={theme.LIGHT_GRAY} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.infoHeading}>
            Sellers usually ship within 5-7 days
          </Text>
          <Text style={styles.infoBody}>
            We recommend contacting them if you have any delivery questions.
          </Text>
        </View>
      </View>

      <View style={styles.spacer} />

      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="receipt-outline" size={24} color={theme.LIGHT_GRAY} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.infoHeading}>
            Check order details on your receipt
          </Text>
          <Text style={styles.infoBody}>
            Go to the receipt icon on your profile and tap Purchased to view
            more about this order.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderConfirmationScreen;
