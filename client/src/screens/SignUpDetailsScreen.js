import React, { useState, useRef } from 'react';
import geared from '../api/geared';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  SafeAreaView,
  Image,
  Modal,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

// Components
import AlertMessage from '../components/AlertMessage';
import ModalComponent from '../components/Modal';

// Styles
import styles from '../styles/SignUpDetailsScreenStyles';

// Actions
import { completeSignUp } from '../actions/userActions';
import { CLEAR_PROFILE_DATA } from '../constants/userConstants';

const SignUpDetailsScreen = ({ route }) => {
  // Hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Input state
  const [dateOfBirth, setDateOfBirth] = useState({
    month: '',
    day: '',
    year: '',
  });

  const [profileImage, setProfileImage] = useState(null);
  const [bio, setBio] = useState('');
  const [interest1, setInterest1] = useState('');
  const [interest2, setInterest2] = useState('');
  const [interest3, setInterest3] = useState('');
  const [interest4, setInterest4] = useState('');
  const [showAlertMessage, setShowAlertMessage] = useState(false);
  const [AlertMessageMessage, setAlertMessageMessage] = useState(null);
  const [loadingSignUp, setLoadingSignUp] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  // Input ref
  const dayRef = useRef();
  const yearRef = useRef();

  // Modals
  const [bioModalVisible, setBioModalVisible] = useState(false);

  // State from redux store
  const { error: errorSignIn } = useSelector((state) => state.userSignIn);

  const { error: errorCompleteSignUp } = useSelector(
    (state) => state.completeSignUp
  );

  useFocusEffect(
    React.useCallback(() => {
      return () => dispatch({ type: CLEAR_PROFILE_DATA });
    }, [dispatch])
  );

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let imagePickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!imagePickerResult.cancelled) {
      const formData = new FormData();
      formData.append('profileImage', {
        name: `post${Date.now()}`,
        uri: imagePickerResult.uri,
        type: 'image/jpg',
      });

      try {
        setLoadingImage(true);
        const { data: cloudinaryURL } = await geared.post(
          '/api/upload/profile',
          formData,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        console.log(cloudinaryURL);
        setProfileImage(cloudinaryURL);
        setLoadingImage(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleSubmit = async () => {
    let currentYear = new Date().getFullYear();
    let dob;

    if (
      (dateOfBirth.month && dateOfBirth.month <= 0) ||
      dateOfBirth.month > 12 ||
      (dateOfBirth.month && dateOfBirth.month.length < 2)
    ) {
      setAlertMessageMessage('Invalid date');
      return setShowAlertMessage(true);
    }
    if (
      (dateOfBirth.day && dateOfBirth.day <= 0) ||
      dateOfBirth.day > 31 ||
      (dateOfBirth.day && dateOfBirth.day.length < 2)
    ) {
      setAlertMessageMessage('Invalid date');
      return setShowAlertMessage(true);
    }
    if (
      (dateOfBirth.year && dateOfBirth.year <= 1920) ||
      dateOfBirth.year > currentYear ||
      (dateOfBirth.year && dateOfBirth.year.length < 4)
    ) {
      setAlertMessageMessage('Invalid date');
      return setShowAlertMessage(true);
    }

    if (!dateOfBirth.month || !dateOfBirth.day || !dateOfBirth.year) {
      setAlertMessageMessage('Invalid date');
      return setShowAlertMessage(true);
    }

    dob = `${dateOfBirth.month}/${dateOfBirth.day}/${dateOfBirth.year}`;

    // 5 second timer
    setLoadingSignUp(true);
    await delay(5000);

    dispatch(
      completeSignUp(
        dob,
        profileImage,
        bio,
        interest1,
        interest2,
        interest3,
        interest4
      )
    );
    // setLoadingSignUp(false);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={styles.container}>
          <Text style={styles.header}>Set up your account</Text>

          {loadingImage && <Text style={styles.uploadingImage}>Uploading</Text>}

          <View style={styles.inputContainer}>
            {errorSignIn && <AlertMessage>{errorSignIn}</AlertMessage>}
            {errorCompleteSignUp && (
              <AlertMessage>{errorCompleteSignUp}</AlertMessage>
            )}
            <View style={styles.textInputContainer}>
              <Text style={styles.inputTitle}>Date of birth</Text>

              <View style={styles.dobContainer}>
                <TextInput
                  style={styles.input}
                  value={dateOfBirth.month}
                  onChangeText={(value) =>
                    setDateOfBirth({ ...dateOfBirth, month: value })
                  }
                  placeholder="MM"
                  placeholderTextColor={'#a1a1aa'}
                  autoCapitalize="none"
                  returnKeyType="next"
                  keyboardType="numeric"
                  maxLength={2}
                />
                <Text>/</Text>
                <TextInput
                  style={styles.input}
                  ref={dayRef}
                  value={dateOfBirth.day}
                  onChangeText={(value) =>
                    setDateOfBirth({ ...dateOfBirth, day: value })
                  }
                  placeholder="DD"
                  placeholderTextColor={'#a1a1aa'}
                  autoCapitalize="none"
                  returnKeyType="next"
                  keyboardType="numeric"
                  maxLength={2}
                />
                <Text>/</Text>
                <TextInput
                  style={styles.input}
                  ref={yearRef}
                  value={dateOfBirth.year}
                  onChangeText={(value) =>
                    setDateOfBirth({ ...dateOfBirth, year: value })
                  }
                  placeholder="YYYY"
                  placeholderTextColor={'#a1a1aa'}
                  autoCapitalize="none"
                  returnKeyType="done"
                  keyboardType="numeric"
                  maxLength={4}
                />
              </View>
            </View>

            {showAlertMessage && (
              <Text style={styles.dobAlertMessage}>{AlertMessageMessage}</Text>
            )}

            <View style={styles.textInputContainer}>
              <Text style={styles.inputTitle}>Bio</Text>

              <TouchableOpacity
                onPress={() => setBioModalVisible(true)}
                activeOpacity={0.8}
              >
                <View style={styles.chevronContainer}>
                  <Text style={styles.optionalText}>optional</Text>
                  <Ionicons
                    name="ios-chevron-forward-outline"
                    size={22}
                    color="#71717a"
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.profileImageSection}>
              <Text style={styles.inputTitle}>Profile image</Text>

              <View style={styles.imageAndOptionalText}>
                <Text style={[styles.optionalText, { paddingRight: 10 }]}>
                  optional
                </Text>
                {!profileImage ? (
                  <TouchableOpacity
                    onPress={() => pickImage()}
                    activeOpacity={1}
                  >
                    <Image
                      style={styles.profileImageContainer}
                      source={{
                        uri: 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg',
                      }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => pickImage()}
                    activeOpacity={1}
                  >
                    <Image
                      source={{ uri: profileImage }}
                      style={{ width: 30, height: 30, borderRadius: 100 }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* Bio Modal */}
            <View style={styles.centeredView}>
              <Modal
                animationType="fade"
                transparent={true}
                visible={bioModalVisible}
                onRequestClose={() => {
                  AlertMessage.AlertMessage('Modal has been closed.');
                  setBioModalVisible(!bioModalVisible);
                }}
              >
                <ModalComponent
                  header={'Bio'}
                  closeModal={() => setBioModalVisible(false)}
                  modal={true}
                  input={
                    <TextInput
                      style={styles.textInput}
                      value={bio}
                      onChangeText={(value) => setBio(value)}
                      placeholder="Something about yourself..."
                      placeholderTextColor={'#a1a1aa'}
                      autoFocus={true}
                      returnKeyType="done"
                      maxLength={128}
                    />
                  }
                />
              </Modal>
            </View>

            <TouchableOpacity onPress={handleSubmit}>
              {!loadingSignUp ? (
                <Text style={styles.signUpBtn}>Sign Up</Text>
              ) : (
                <Text style={styles.signUpBtn}>Creating account...</Text>
              )}
            </TouchableOpacity>

            <View style={styles.signUpTextContainer}>
              <Text style={styles.signUpText}>Have an account?</Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Login')}
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
        {/* </TouchableWithoutFeedback> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpDetailsScreen;
