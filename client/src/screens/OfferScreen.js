import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Styles
import styles from '../styles/OfferScreenStyles';
import theme from '../styles/styles.theme';

const thirdWindowWidth = Dimensions.get('window').width / 3;

const sendOffer = () => {};

const OfferScreen = () => {
  const [offer, setOffer] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.productInfoContainer}>
        <Image
          resizeMode="contain"
          style={styles.productImage}
          source={require('../assets/test-images/maxey.jpg')}
        />

        <View style={styles.productDetailsContainer}>
          <Text style={styles.productTitle}>
            Tyrese Maxey Contenders Rookie Auto 30/99
          </Text>
          <Text style={styles.currentPrice}>Current price: $600</Text>
          <Text style={styles.shipping}>+ $15 shipping</Text>
        </View>
      </View>

      <View style={styles.alertContainer}>
        <Ionicons
          style={styles.icon}
          name="alarm-outline"
          size={30}
          color={theme.MEDIUM_GRAY}
        />
        <View style={styles.alertMessageContainer}>
          <Text style={styles.alertMessageTitle}>
            Heads up, offering isn't buying
          </Text>
          <Text style={styles.alertMessageBody}>
            If the seller accepts, you'll have 24 hours to but the item at your
            offer price
          </Text>
        </View>
      </View>

      <View style={styles.offerContainer}>
        <Text style={styles.offerTitle}>Your offer</Text>
        <TextInput
          keyboardAppearance="dark"
          autoFocus
          style={styles.offerInput}
          value={offer}
          onChangeText={(price) => setOffer(price)}
          placeholder={'$ 0.00'}
          placeholderTextColor={theme.DARK_GRAY}
          keyboardType="decimal-pad"
        />
        <Text style={styles.additionalShipping}>+ $15 shipping</Text>
        <Text style={styles.tip}>
          Tip:{' '}
          <Text style={{ fontWeight: '400', fontSize: 13 }}>
            Offers 5-20% below the current price are most likely to be accepted
          </Text>
        </Text>

        <TouchableOpacity onPress={sendOffer} activeOpacity={0.8}>
          <Text style={styles.sendOfferBtn}>Send offer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OfferScreen;
