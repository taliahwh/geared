import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Components
import SelectAddressModal from '../components/SelectAddressModal';

// Styles
import styles from '../styles/CheckoutScreenStyles';
import theme from '../styles/styles.theme';

const CheckoutScreen = () => {
  // Hooks
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const navigateToEditAddress = () => {
    navigation.navigate('EditShippingAddress');
  };
  const navigateToPaymentTypeScreen = () => {};
  return (
    <ScrollView style={styles.container}>
      <View style={styles.itemAvailableContainer}>
        <Text style={{ textAlign: 'center' }}>
          <Text style={{ fontWeight: '700' }}>1</Text> item available from{' '}
          <Text style={{ fontWeight: '700' }}>antedwards</Text>
        </Text>
      </View>

      <View style={styles.productDetailsContainer}>
        <Image
          style={styles.productImage}
          source={require('../assets/test-images/maxey.jpg')}
        />
        <Text style={styles.productTitle}>
          Tyrese Maxey Contenders Rookie Auto 30/99
        </Text>
        <Text style={styles.productPrice}>$140</Text>
      </View>

      <Text style={styles.containerTitle}>Shipping address</Text>
      <View style={styles.sectionContainer}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          activeOpacity={0.8}
        >
          <View style={styles.section}>
            <Ionicons
              style={styles.alertIcon}
              name="alert-circle-outline"
              size={24}
              color="black"
            />
            <Text style={styles.addNewAddress}>Add new address</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color={theme.DARK_GRAY}
            />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.containerTitle}>Payment type</Text>
      <View style={styles.sectionContainer}>
        <TouchableOpacity
          onPress={navigateToPaymentTypeScreen}
          activeOpacity={0.8}
        >
          <View style={styles.section}>
            <View style={styles.paypalIconContainer}>
              <Image
                style={styles.paypalCardIcon}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/174/174861.png',
                }}
              />
            </View>
            <Text style={styles.paymentTypeText}>PayPal</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color={theme.DARK_GRAY}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.paypalCheckoutBtn}>
        <Image
          style={styles.paypalCheckoutBtnIcon}
          source={{
            uri: 'https://brandslogos.com/wp-content/uploads/images/large/paypal-logo-black-and-white.png',
          }}
        />
        <Text style={styles.checkoutText}>Checkout</Text>
      </View>

      <Text style={styles.paymentProcessedText}>
        This payment will be processed by PayPal
      </Text>

      {/* <View style={styles.acceptedPaymentsSections}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.paypalCardIcon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/174/174861.png',
            }}
          />
        </View>

        <View style={styles.cardContainer}>
          <Image
            resizeMode="repeat"
            style={{ width: 25, height: 20 }}
            source={{
              uri: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/363_Visa_Credit_Card_logo-512.png',
            }}
          />
        </View>
      </View> */}

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <SelectAddressModal />
      </Modal>
    </ScrollView>
  );
};

export default CheckoutScreen;
