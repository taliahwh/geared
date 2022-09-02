import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';

import { states } from '../utils/states';

// Styles
import {
  styles,
  pickerSelectStyles,
} from '../styles/ShippingAddressScreenStyles';

const ShippingAddressScreen = () => {
  const navigation = useNavigation();

  const [address, setAddress] = useState('');
  const [addressLineTwo, setAddressLineTwo] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState(null);
  const [sport, setSport] = useState(null);

  const submitAddress = () => {
    const newAddress = {
      address,
      addressLineTwo,
      city,
      state,
      zipCode,
      sport,
    };

    navigation.navigate('ConfirmShipping');
  };

  const placeholder = {
    label: 'Select',
    value: null,
    color: '#9EA0A4',
  };

  return (
    <KeyboardAwareScrollView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.inputTitle}>Address line 1</Text>
        <TextInput
          keyboardAppearance="dark"
          style={styles.textInput}
          textContentType="fullStreetAddress"
          value={address}
          onChange={setAddress}
        />

        <Text style={styles.inputTitle}>Address line 2</Text>
        <TextInput
          keyboardAppearance="dark"
          placeholder="Optional"
          style={styles.textInput}
          value={addressLineTwo}
          onChange={setAddressLineTwo}
        />

        <Text style={styles.inputTitle}>City</Text>
        <TextInput
          keyboardAppearance="dark"
          style={styles.textInput}
          textContentType="addressCity"
          value={city}
          onChangeText={setCity}
        />

        <Text style={styles.inputTitle}>State</Text>
        <View style={pickerSelectStyles.pickerContainer}>
          <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={(value) => setSport(value)}
            items={states}
            placeholder={placeholder}
          />
        </View>

        <Text style={styles.inputTitle}>Zip or postal code</Text>
        <TextInput
          keyboardAppearance="dark"
          style={styles.textInput}
          textContentType="postalCode"
          value={zipCode}
          onChangeText={setZipCode}
        />

        <View style={styles.countrySection}>
          <Text style={styles.inputTitle}>Country</Text>
          <Text style={styles.countryText}>United States</Text>
        </View>

        <TouchableOpacity onPress={submitAddress} activeOpacity={0.8}>
          <View style={styles.btnContainer}>
            <Text style={styles.continueBtn}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ShippingAddressScreen;
