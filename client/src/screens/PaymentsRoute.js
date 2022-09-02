import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import paypal from '../../assets/paypal-logo.png';

// Styles
import theme from '../styles/styles.theme';

const PaymentRoute = () => {
  const navigation = useNavigation();

  const navigateToPayPalScreen = () => {
    navigation.navigate('ConnectPayPal');
  };
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

        <TouchableOpacity
          onPress={navigateToPayPalScreen}
          activeOpacity={0.7}
          style={styles.manageSettingBtn}
        >
          <View style={styles.leftOfBtn}>
            <FontAwesome
              name="paypal"
              size={24}
              color={theme.MEDIUM_GRAY}
              style={styles.btnIcon}
            />

            <Text style={styles.btnTitle}>Manage Paypal settings</Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={theme.MEDIUM_GRAY}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.FEED_BACKGROUND,
  },
  topContainer: {
    backgroundColor: theme.DARK_MODE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  paypalCard: {
    backgroundColor: theme.FEED_BACKGROUND,
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
    backgroundColor: theme.DARK_MODE,
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
    backgroundColor: theme.FEED_BACKGROUND,
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
    color: theme.LIGHT_GRAY,
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
    width: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: theme.MEDIUM_GRAY,
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
    color: theme.LIGHT_GRAY,
  },
});

export default PaymentRoute;
