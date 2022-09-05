import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  ActionSheetIOS,
  Modal,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import paypal from '../../assets/paypal-logo.png';

// Screens
import LeaveFeedbackScreen from '../screens/LeaveFeedbackScreen';

// Styles
import styles from '../styles/OrderReceiptScreenStyles';
import theme from '../styles/styles.theme';

const SaleReceiptScreen = ({
  hideModal,
  orderStatus,
  awaitingShipment,
  hasShipped,
  delivered,
}) => {
  const getHelpWithPurchase = () => {};

  return (
    <>
      <SafeAreaView style={styles.screenView}>
        <View style={styles.modalViewForSaleReceipt}>
          <View style={styles.headerContainer}>
            <Pressable onPress={hideModal}>
              <Ionicons
                name="close-outline"
                size={27}
                color={theme.LIGHT_GRAY}
              />
            </Pressable>
            <Text style={styles.headerTitle}>Sale</Text>
            <Ionicons name="close-outline" size={27} color="transparent" />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
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
              {awaitingShipment && (
                <Text style={styles.orderStatus}>Awaiting shipment</Text>
              )}
              {hasShipped && (
                <Text style={styles.orderStatus}>On its way!</Text>
              )}
              {delivered && <Text style={styles.orderStatus}>Delivered</Text>}
            </View>

            <View style={styles.addressContainer}>
              <View style={styles.icon}>
                <Ionicons
                  name="location-outline"
                  size={30}
                  color={theme.LIGHT_GRAY}
                />
              </View>
              {awaitingShipment && (
                <Text style={styles.shippingHeading}>
                  Item will be shipped to:
                </Text>
              )}

              {hasShipped && (
                <Text style={styles.shippingHeading}>Shipped 8/29/22</Text>
              )}
              <Text style={styles.address}>
                Taliah Wharton{'\n'}7838 Provident Street{'\n'}Philadelphia
                Pennsylvania 19150{'\n'}United States
              </Text>

              {hasShipped && (
                <View style={styles.trackingNumberContainer}>
                  <Text style={styles.trackingHeading}>Shipping provider:</Text>
                  <Text style={styles.shippingProvider}>USPS</Text>

                  <View style={styles.spacer} />
                  <Text style={styles.trackingHeading}>Tracking number:</Text>
                  <Text style={styles.trackingNumber}>
                    9400123456789999876500
                  </Text>
                </View>
              )}

              {delivered && (
                <View style={styles.trackingNumberContainer}>
                  <Text style={styles.trackingHeading}>Shipping provider:</Text>
                  <Text style={styles.shippingProvider}>USPS</Text>

                  <View style={styles.spacer} />
                  <Text style={styles.trackingHeading}>Tracking number:</Text>
                  <Text style={styles.trackingNumber}>
                    9400123456789999876500
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.paymentConfirmationContainer}>
              <View style={styles.icon}>
                <Ionicons name="checkmark" size={30} color={theme.LIGHT_GRAY} />
              </View>
              <Text style={styles.statusHeading}>You've been paid</Text>

              <View style={styles.paypalContainer}>
                <Text style={styles.amountAdded}>
                  <Text style={{ fontWeight: '600' }}>$266.25</Text> was added
                  to your PayPal account
                </Text>

                <View style={styles.paypalBtn}>
                  <Text style={styles.goTo}>Go to</Text>
                  <Image
                    source={paypal}
                    style={styles.paypalBtnIcon}
                    resizeMode="contain"
                  />
                </View>
              </View>

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
                  <Text style={styles.chartItem}>Geared fee</Text>
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
            <View style={styles.sellerInfoContainer}>
              <Image
                style={styles.sellerProfileImage}
                source={{
                  uri: 'https://media-s3-us-east-1.ceros.com/hour-media/images/2020/02/22/1515b62a44354747dbe7bdb92fcad03e/usatsi-13976425-scaled.jpg?imageOpt=1&fit=bounds&width=617',
                }}
              />
              <Text style={styles.purchasedOnText}>Sold on 8/29/22 from</Text>
              <Text style={styles.sellerName}>Abigail Warren</Text>
              <Text style={styles.sellerUsername}>@buy_thebook</Text>

              <View style={styles.messagesContainer}>
                <Ionicons
                  name="chatbubbles-outline"
                  size={24}
                  color={theme.ALERT_COLOR}
                  style={styles.messagesIcon}
                />
                <Text style={styles.messagesText}>Messages</Text>
              </View>
            </View>

            <View style={styles.helpContainer}>
              <Text style={styles.helpHeading}>How can we help?</Text>

              <TouchableOpacity
                onPress={getHelpWithPurchase}
                activeOpacity={0.8}
              >
                <View style={styles.helpBtnContainer}>
                  <Text style={styles.helpBtnText}>
                    I haven't received my payment
                  </Text>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={22}
                    color={theme.BORDER_COLOR}
                  />
                </View>

                <View style={styles.helpBtnContainer}>
                  <Text style={styles.helpBtnText}>How do I refund?</Text>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={22}
                    color={theme.BORDER_COLOR}
                  />
                </View>

                <View style={styles.helpBtnContainer}>
                  <Text style={styles.helpBtnText}>See all articles</Text>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={22}
                    color={theme.BORDER_COLOR}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SaleReceiptScreen;
