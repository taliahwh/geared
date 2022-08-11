import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import paypal from '../../assets/paypal-logo.png';

const PaymentRoute = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.paypalCard}>
          <Image
            source={paypal}
            style={styles.paypalLogo}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.loginContainer}>
          <Text style={styles.paypalQuestion}>
            Looking for your PayPal balance?
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
        <View style={styles.manageSettingBtn}>
          <View style={styles.leftOfBtn}>
            <FontAwesome
              name="paypal"
              size={24}
              color="black"
              style={styles.btnIcon}
            />
            <Text style={styles.btnTitle}>Manage Paypal settings</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  topContainer: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  paypalCard: {
    backgroundColor: '#f3f4f6',
    padding: 20,
    width: '75%',
    height: 170,
    marginVertical: 35,
    borderRadius: 10,
    // overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  paypalLogo: {
    width: '60%',
  },
  bottomContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  loginContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  paypalQuestion: {
    textAlign: 'center',
    paddingTop: 10,
    color: '#737373',
  },
  paypalBtn: {
    backgroundColor: '#ffcc00',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    borderRadius: 5,
    marginVertical: 15,
  },
  goTo: {
    fontWeight: '700',
    fontSize: 16,
  },
  paypalBtnIcon: {
    height: 20,
    width: 100,
  },
  manageSettingBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e4e4e7',
    padding: 12,
    borderRadius: 5,
    width: '100%',
  },
  leftOfBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 3,
  },
  btnIcon: {
    paddingRight: 18,
  },
  btnTitle: {
    fontSize: 16,
  },
});

export default PaymentRoute;
