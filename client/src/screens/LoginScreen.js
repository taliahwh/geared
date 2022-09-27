import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

// Styles
import theme from '../styles/styles.theme';

// Components
import AlertMessage from '../components/AlertMessage';

// Actions
import { signIn } from '../actions/userActions';
import { USER_SIGN_IN_RESET } from '../constants/userConstants';

const LoginScreen = () => {
  // Hooks
  const navigation = useNavigation();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  // Loading state
  const [loadingSignIn, setLoadingSignIn] = useState(false);

  const { error: errorSignIn } = useSelector((state) => state.userSignIn);

  const {
    control,
    handleSubmit,
    // formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const onSubmit = async (data) => {
    const { username, password } = data;

    // 1 second timer
    setLoadingSignIn(true);
    await delay(1000);
    dispatch(signIn(username, password));
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.logo}>geared</Text>

            <View style={styles.inputContainer}>
              {errorSignIn && <AlertMessage>{errorSignIn}</AlertMessage>}

              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={(value) => onChange(value)}
                    onBlur={onBlur}
                    placeholder="Email or Username"
                    placeholderTextColor={theme.MEDIUM_GRAY}
                    autoCapitalize="none"
                    autoComplete={'off'}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      passwordRef.current.focus();
                    }}
                    keyboardAppearance="dark"
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={(value) => onChange(value)}
                    onBlur={onBlur}
                    placeholder="Password"
                    placeholderTextColor={theme.MEDIUM_GRAY}
                    autoCapitalize="none"
                    ref={passwordRef}
                    secureTextEntry
                    keyboardAppearance="dark"
                  />
                )}
              />

              <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                activeOpacity={0.5}
              >
                {!loadingSignIn || errorSignIn ? (
                  <Text style={styles.loginBtn}>Login</Text>
                ) : (
                  <View style={styles.loadingBtn}>
                    <ActivityIndicator color={'#fff'} />
                  </View>
                )}
                {/* <Text style={styles.loginBtn}>Login</Text> */}
              </TouchableOpacity>

              <View style={styles.signUpTextContainer}>
                <Text style={styles.signUpText}>Don't have an account?</Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    navigation.navigate('Sign Up');
                  }}
                >
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      fontWeight: '500',
                      color: theme.LIGHT_GRAY,
                    }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: theme.DARK_MODE,
  },
  logo: {
    fontSize: 45,
    fontWeight: '800',
    fontStyle: 'italic',
    color: theme.LIGHT_GRAY,
  },
  container: {
    width: '100%',
    height: '75%',
    display: 'flex',
    // backgroundColor: 'orange',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
    marginVertical: 10,
    paddingVertical: 7,
    paddingHorizontal: 7,
    color: theme.LIGHT_GRAY,
  },
  loginBtn: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: theme.PRIMARY_COLOR,
    color: '#fff',
    paddingVertical: 11,
    marginTop: 7,
  },
  loadingBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.PRIMARY_COLOR,
    color: '#fff',
    paddingVertical: 11,
    marginTop: 7,
  },
  signUpTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 13,
  },
  signUpText: {
    textAlign: 'center',
    paddingRight: 5,
    color: theme.LIGHT_GRAY,
  },
});

export default LoginScreen;
