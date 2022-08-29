import React from 'react';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Styles
import styles from '../styles/OrderReceiptScreenStyles';

const OrderReceiptScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.itemDescriptionContainer}>
          <Image
            style={styles.itemImage}
            source={{
              uri: 'https://cconnect.s3.amazonaws.com/wp-content/uploads/2019/01/Top-Luka-Doncic-Rookie-Cards-thumb-300.jpg',
            }}
          />
          <Text style={styles.itemDescription}>
            Luka Doncic Panini Contenders RPA 07/99
          </Text>
          <Text style={styles.itemPrice}>$340</Text>
        </View>

        <View style={styles.orderStatusContainer}>
          <Text style={styles.statusHeading}>Status</Text>
          <Text style={styles.orderStatus}>Awaiting shipping</Text>
        </View>

        <View style={styles.addressContainer}>
          <View style={styles.icon}>
            <Ionicons name="location-outline" size={30} color="black" />
          </View>
          <Text style={styles.shippingHeading}>Item will be shipped to:</Text>
          <Text style={styles.address}>
            Taliah Wharton{'\n'}7838 Provident Street{'\n'}Philadelphia
            Pennsylvania 19150{'\n'}United States
          </Text>
        </View>

        <View style={styles.paymentConfirmationContainer}>
          <View style={styles.icon}>
            <Ionicons name="checkmark" size={30} color="black" />
          </View>
          <Text style={styles.statusHeading}>Payment sent</Text>
          <Text style={styles.paymentDescription}>
            Paid $12.18 with Geared Payments
          </Text>

          <View style={styles.paymentChartContainer}>
            <View style={styles.chartItemContainer}>
              <Text style={styles.chartItem}>Item price</Text>
              <Text style={styles.chartItem}>$340.00</Text>
            </View>
          </View>

          <View style={styles.paymentChartContainer}>
            <View style={styles.chartItemContainer}>
              <Text style={styles.chartItem}>Shipping</Text>
              <Text style={styles.chartItem}>$3.49</Text>
            </View>
          </View>

          <View style={styles.paymentChartContainer}>
            <View style={styles.chartItemContainer}>
              <Text style={styles.chartItem}>Sales tax</Text>
              <Text style={styles.chartItem}>$0.69</Text>
            </View>
          </View>

          <View style={styles.paymentChartContainer}>
            <View style={styles.chartItemContainer}>
              <Text style={styles.chartItem}>Total</Text>
              <Text style={styles.totalPrice}>$344.18</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderReceiptScreen;
