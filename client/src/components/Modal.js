import React from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Pressable,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

// Styles
import theme from '../styles/styles.theme';

const containerHeight = Dimensions.get('window').height / 2;

const Modal = ({
  modal = false,
  closeModal,
  header,
  input,
  clearModalIcon,
  clearInterestInputs,
  hideCheckBtn,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {modal && (
          <View style={[styles.inner, { height: containerHeight }]}>
            <View style={styles.headerContainer}>
              {clearModalIcon ? (
                <Pressable onPress={clearInterestInputs}>
                  <Text style={{ color: '#ef4444', fontSize: 13 }}>CLEAR</Text>
                </Pressable>
              ) : (
                <Pressable onPress={closeModal}>
                  <Ionicons name="close-outline" size={27} color="#ef4444" />
                </Pressable>
              )}

              <Text style={styles.headerTitle}>{header}</Text>
              {hideCheckBtn ? (
                <Ionicons name="ios-checkmark-sharp" size={24} color="white" />
              ) : (
                <Pressable onPress={closeModal}>
                  <Ionicons
                    name="ios-checkmark-sharp"
                    size={24}
                    color={theme.LIGHT_GRAY}
                  />
                </Pressable>
              )}
            </View>
            <ScrollView>{input}</ScrollView>
          </View>
        )}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.9)',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  inner: {
    paddingVertical: 5,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: theme.DARK_MODE,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: theme.MEDIUM_GRAY,
    marginBottom: 5,
    backgroundColor: theme.DARK_MODE,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: theme.LIGHT_GRAY,
  },
  headerIcon: {},
  textInput: {
    height: 40,
    borderColor: '#000000',
    paddingHorizontal: 10,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default Modal;
