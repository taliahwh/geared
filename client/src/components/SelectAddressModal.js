import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Styles
import styles from '../styles/SelectAddressModalStyles';
import theme from '../styles/styles.theme';

const AddressContainer = ({
  name,
  streetAddressOne,
  streetAddressTwo,
  city,
  state,
  zipCode,
  country,
}) => {
  return (
    <View style={styles.addressContainer}>
      <Text style={styles.address}>
        {name}, {streetAddressOne}
        {streetAddressTwo ? `, ${streetAddressTwo}` : ''}, {city}, {state},{' '}
        {zipCode}, {country}
      </Text>

      <View style={styles.chevronContainer}>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          color={theme.MEDIUM_GRAY}
        />
      </View>
    </View>
  );
};

const SelectAddressModal = ({ hideModal }) => {
  return (
    <View style={styles.screenView}>
      <View style={styles.modalView}>
        <View style={styles.headerContainer}>
          {/* <View style={styles.swipeBar} /> */}

          <View style={styles.header}>
            <Pressable onPress={hideModal}>
              <Ionicons
                name="chevron-back-outline"
                size={28}
                color={theme.LIGHT_GRAY}
              />
            </Pressable>

            <Text style={styles.headerTitle}>Select address</Text>
            <Text style={styles.editText}>Edit</Text>
          </View>
        </View>

        <View style={styles.addressAndBtnContainer}>
          <AddressContainer
            name={'Taliah Wharton'}
            streetAddressOne={'7838 Provident Street'}
            streetAddressTwo={null}
            city={'Philadelphia'}
            state={'Pennsylvania'}
            zipCode={'19150'}
            country={'United States'}
          />

          <TouchableOpacity
            onPress={() => console.log('Add new address')}
            activeOpacity={0.8}
          >
            <View style={styles.btnContainer}>
              <Text style={styles.addAddressBtn}>Add new address</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectAddressModal;
