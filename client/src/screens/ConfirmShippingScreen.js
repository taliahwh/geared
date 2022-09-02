import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Styles
import styles from '../styles/ConfirmShippingScreenStyles';

const ConfirmShippingScreen = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState('');

  const confirmAddress = () => {};
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screenContainer}>
        <View style={styles.mapImage}>
          <ImageBackground
            style={styles.mapImage}
            // blurRadius={3}
            source={{
              uri: 'https://img.freepik.com/premium-vector/city-map-gps-route-vector-street-navigation-road-plan_152104-547.jpg?w=2000',
            }}
          >
            <LinearGradient
              colors={['transparent', 'rgba(50,50,50,1)']}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View style={styles.confirmDetailsContainer}>
                <Text style={styles.smallText}>Confirm shipping address</Text>
                <Text style={styles.header}>Confirm address and details</Text>
                <Text style={styles.address}>
                  7838 Provident Street{'\n'}Philadelphia{'\n'}Pennsylvania,
                  19150
                  {'\n'}United States
                </Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        <KeyboardAwareScrollView style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>First and last name</Text>
            <TextInput
              keyboardAppearance="dark"
              style={styles.textInput}
              textContentType="name"
              value={fullName}
              onChangeText={setFullName}
            />

            <Text style={styles.inputTitle}>Phone number</Text>
            <TextInput
              keyboardAppearance="dark"
              style={styles.textInput}
              textContentType="telephoneNumber"
              keyboardType="numeric"
              placeholder="Optional"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />

            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              keyboardAppearance="dark"
              style={styles.textInput}
              textContentType="emailAddress"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <TouchableOpacity onPress={confirmAddress} activeOpacity={0.8}>
            <View style={styles.btnContainer}>
              <Text style={styles.confirmBtn}>Confirm and add address</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ConfirmShippingScreen;
