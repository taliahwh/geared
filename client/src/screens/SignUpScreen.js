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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

// Styles
import theme from '../styles/styles.theme';

// Components
import AlertMessage from '../components/AlertMessage';
import Loader from '../components/Loaders/Loader';

// Actions
import { signUp } from '../actions/userActions';

const SignUpScreen = () => {
  // Hooks
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // Input state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Input ref
  const lastNameRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // Redux state
  const {
    loading: loadingSignUp,
    success: successSignUp,
    error: errorSignUp,
  } = useSelector((state) => state.userSignUp);

  const handleSubmit = () => {
    dispatch(
      signUp(firstName, lastName, email, username, password, confirmPassword)
    );
  };

  useEffect(() => {
    successSignUp &&
      navigation.navigate('Sign Up Details', {
        firstName,
        lastName,
        email,
        username,
        password,
        confirmPassword,
      });
  }, [successSignUp]);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.logo}>geared</Text>

            <View style={styles.inputContainer}>
              {loadingSignUp && <ActivityIndicator />}
              {errorSignUp && <AlertMessage>{errorSignUp}</AlertMessage>}

              <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={(value) => setFirstName(value)}
                textContentType="name"
                placeholder="First name"
                placeholderTextColor={'#a1a1aa'}
                autoCapitalize="words"
                // returnKeyType="next"
              />

              <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={(value) => setLastName(value)}
                textContentType="familyName"
                placeholder="Last name"
                placeholderTextColor={'#a1a1aa'}
                autoCapitalize="words"
                // returnKeyType="next"
                ref={lastNameRef}
                onSubmitEditing={() => {
                  emailRef.current.focus();
                }}
              />

              <TextInput
                style={styles.input}
                value={email}
                onChangeText={(value) => setEmail(value)}
                textContentType="emailAddress"
                placeholder="Email address"
                placeholderTextColor={'#a1a1aa'}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                // returnKeyType="next"
                ref={emailRef}
              />

              <TextInput
                style={styles.input}
                value={username}
                onChangeText={(value) => setUsername(value)}
                placeholder="Username"
                placeholderTextColor={'#a1a1aa'}
                autoCapitalize="none"
                autoCorrect={false}
                // returnKeyType="next"
                ref={usernameRef}
              />

              <TextInput
                style={styles.input}
                value={password}
                onChangeText={(value) => setPassword(value)}
                placeholder="Password"
                placeholderTextColor={'#a1a1aa'}
                autoCapitalize="none"
                ref={passwordRef}
                secureTextEntry
              />

              <TextInput
                style={styles.input}
                value={confirmPassword}
                onChangeText={(value) => setConfirmPassword(value)}
                placeholder="Confirm password"
                placeholderTextColor={'#a1a1aa'}
                autoCapitalize="none"
                ref={confirmPasswordRef}
                secureTextEntry
              />

              <TouchableOpacity activeOpacity={0.5} onPress={handleSubmit}>
                <Text style={styles.loginBtn}>Continue</Text>
              </TouchableOpacity>

              <View style={styles.signUpTextContainer}>
                <Text style={styles.signUpText}>Have an account?</Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                >
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      fontWeight: '500',
                    }}
                  >
                    Login
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
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 45,
    fontWeight: '800',
    fontStyle: 'italic',
    // textAlign: 'center',
  },
  container: {
    width: '100%',
    height: '85%',
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
    borderColor: theme.BORDER_COLOR,
    marginVertical: 10,
    paddingVertical: 7,
    paddingHorizontal: 7,
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
  },
});

export default SignUpScreen;
