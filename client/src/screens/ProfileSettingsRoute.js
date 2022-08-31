import React, { useState, useRef, useEffect } from 'react';
import geared from '../api/geared';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

// Components
import ModalComponent from '../components/Modal';
import AlertMessage from '../components/AlertMessage';

// Styles
import styles from '../styles/ProfileSettingsRouteStyles';

// Actions
import {
  getAuthUserDetails,
  updateProfile,
  updatePassword,
} from '../actions/userActions';
import {
  CLEAR_PASSWORD_DATA,
  CLEAR_POSTS_DATA,
  CLEAR_PROFILE_DATA,
} from '../constants/userConstants';

const ProfileSettingsRoute = () => {
  // Hooks
  const dispatch = useDispatch();

  // Redux state
  const { _id: userId } = useSelector((state) => state.userSignIn.userInfo);

  const {
    loading: loadingUserDetails,
    userDetails,
    error: errorUserDetails,
  } = useSelector((state) => state.authUserDetails);

  const { error: errorUpdateProfile, success: successUpdateProfile } =
    useSelector((state) => state.userUpdateProfile);

  const {
    error: errorUpdatePassword,
    success: successUpdatePassword,
    message: messageUpdatePassword,
  } = useSelector((state) => state.userUpdatePassword);

  // console.log(successUpdateProfile);

  // Modals
  const [interestsModalVisible, setInterestsModalVisible] = useState(false);
  const [bioModalVisible, setBioModalVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);

  // Form state
  const [bio, setBio] = useState('');
  const [fullName, setFullName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [interest1, setInterest1] = useState('');
  const [interest2, setInterest2] = useState('');
  const [interest3, setInterest3] = useState('');
  const [interest4, setInterest4] = useState('');
  const [website, setWebsite] = useState('');

  const handleAlertMessage = () => {
    successUpdateProfile &&
      Alert.alert('Profile Updated', 'Profile updated successfully', [
        {
          text: 'OK',
          onPress: () => {
            dispatch(getAuthUserDetails());
            dispatch({ type: CLEAR_PROFILE_DATA });
          },
        },
      ]);

    errorUpdateProfile &&
      Alert.alert('Something went wrong', errorUpdateProfile, [
        {
          text: 'OK',
          onPress: () => {
            dispatch(getAuthUserDetails());
            dispatch({ type: CLEAR_PROFILE_DATA });
          },
        },
      ]);

    successUpdatePassword &&
      Alert.alert('Password Updated', 'Password updated successfully', [
        {
          text: 'OK',
          onPress: () => {
            dispatch(getAuthUserDetails());
            dispatch({ type: CLEAR_PASSWORD_DATA });
          },
        },
      ]);

    errorUpdatePassword &&
      Alert.alert('Something went wrong', errorUpdatePassword, [
        {
          text: 'OK',
          onPress: () => {
            dispatch(getAuthUserDetails());
            dispatch({ type: CLEAR_PASSWORD_DATA });
          },
        },
      ]);
  };

  const clearInterests = () => {
    setInterest1('');
    setInterest2('');
    setInterest3('');
    setInterest4('');
  };

  const handleNewPassword = (newPassword, confirmPassword) => {
    dispatch(updatePassword(newPassword, confirmPassword));
  };

  const handleSubmit = (data) => {
    dispatch(
      updateProfile(
        profileImage,
        bio,
        interest1,
        interest2,
        interest3,
        interest4,
        fullName,
        website
      )
    );
  };

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
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    handleAlertMessage();
  }, [
    successUpdateProfile,
    errorUpdateProfile,
    successUpdatePassword,
    errorUpdatePassword,
  ]);

  // Will be called every time the dashboard tab is focused
  useEffect(() => {
    dispatch(getAuthUserDetails());
  }, [dispatch, userId, successUpdatePassword, successUpdateProfile]);

  return (
    <>
      {loadingUserDetails && <ActivityIndicator />}
      {userDetails && (
        <KeyboardAwareScrollView style={styles.container} enableOnAndroid>
          {/* {errorUpdateProfile && (
            <AlertMessage>{errorUpdateProfile}</AlertMessage>
          )} */}

          {/* <ScrollView > */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>User Details</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>Username</Text>

              <TextInput
                style={styles.disabledInputSection}
                // ref={register.username}
                value={userDetails.username}
                placeholder={userDetails.username}
                placeholderTextColor={'#a1a1aa'}
                maxLength={25}
                autoCapitalize="none"
                textContentType="username"
                editable={false}
                selectTextOnFocus={false}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>Email</Text>

              <TextInput
                style={styles.disabledInputSection}
                value={userDetails.email}
                placeholder={userDetails.email}
                placeholderTextColor={'#a1a1aa'}
                maxLength={25}
                autoCapitalize="none"
                textContentType="emailAddress"
              />
            </View>

            <TouchableOpacity onPress={() => setPasswordModalVisible(true)}>
              <View style={styles.flexInputContainer}>
                <Text style={styles.flexInputTitle}>Password</Text>

                <Text style={styles.flexPlaceholderSection}>•••••••</Text>
                <Ionicons
                  name="ios-chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </View>
            </TouchableOpacity>

            <View style={styles.imageInputContainer}>
              <Text style={styles.inputTitle}>Picture</Text>
              {!profileImage ? (
                <TouchableOpacity onPress={() => pickImage()} activeOpacity={1}>
                  <Image
                    style={styles.userImage}
                    source={{
                      uri: userDetails.profileImage,
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => pickImage()} activeOpacity={1}>
                  <Image
                    source={{ uri: profileImage }}
                    style={styles.userImage}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About me</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>Full name</Text>

              <TextInput
                style={styles.inputSection}
                defaultValue={userDetails.name}
                onChangeText={(value) => setFullName(value)}
                name="fullName"
                placeholder={userDetails.name}
                placeholderTextColor={'#a1a1aa'}
                maxLength={25}
                // autoCapitalize="none"
                textContentType="name"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>Date of birth</Text>

              <TextInput
                style={styles.disabledInputSection}
                defaultValue={userDetails.dateOfBirth}
                onChangeText={(value) => onChange(value)}
                placeholderTextColor={'#a1a1aa'}
                editable={false}
              />
            </View>

            <TouchableOpacity onPress={() => setInterestsModalVisible(true)}>
              <View style={styles.flexInputContainer}>
                <Text style={styles.flexInputTitle}>Interests</Text>

                <Text style={styles.flexPlaceholderSection}></Text>
                <Ionicons
                  name="ios-chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setBioModalVisible(true)}>
              <View style={styles.flexInputContainer}>
                <Text style={styles.flexInputTitle}>Bio</Text>

                <Text style={styles.flexPlaceholderSection}>
                  {userDetails.bio.length > 5
                    ? `${userDetails.bio.slice(0, 24)}...`
                    : 'Something about yourself...'}
                </Text>
                <Ionicons
                  name="ios-chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </View>
            </TouchableOpacity>

            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>My website</Text>

              <TextInput
                style={styles.inputSection}
                defaultValue={
                  userDetails.website ? userDetails.website : website
                }
                onChangeText={(value) => setWebsite(value)}
                name="website"
                placeholder={userDetails.website || 'yoursite.com'}
                placeholderTextColor={'#a1a1aa'}
                autoComplete={'off'}
                autoCapitalize="none"
              />
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
                      defaultValue={userDetails.bio ? userDetails.bio : bio}
                      onChangeText={(value) => setBio(value)}
                      placeholder={
                        userDetails.bio.length > 5
                          ? userDetails.bio
                          : 'Something about yourself...'
                      }
                      placeholderTextColor={'#a1a1aa'}
                      autoFocus={true}
                      name="bio"
                      autoCorrect={false}
                      returnKeyType="done"
                      maxLength={128}
                    />
                  }
                />
              </Modal>
            </View>

            {/* Interests Modal */}
            <View style={styles.centeredView}>
              <Modal
                animationType="fade"
                transparent={true}
                visible={interestsModalVisible}
                onRequestClose={() => {
                  AlertMessage.AlertMessage('Modal has been closed.');
                  setInterestsModalVisible(!interestsModalVisible);
                }}
              >
                <ModalComponent
                  header={'Interests'}
                  clearModalIcon={
                    <Ionicons
                      name="ios-close-outline"
                      size={25}
                      color="black"
                    />
                  }
                  clearInterestInputs={clearInterests}
                  closeModal={() => setInterestsModalVisible(false)}
                  modal={true}
                  input={
                    <View style={styles.modalContainer}>
                      <Text style={styles.modalDisplayText}>
                        Create a few interest tags to connect with other users
                        and make your profile more accessible
                      </Text>

                      <View style={styles.interestTagContainer}>
                        <TextInput
                          style={styles.interestInput}
                          defaultValue={
                            userDetails.interests[0].name
                              ? userDetails.interests[0].name
                              : interest1
                          }
                          onChangeText={(value) => setInterest1(value)}
                          placeholder={
                            userDetails.interests[0].name
                              ? userDetails.interests[0].name
                              : 'Stephen Curry'
                          }
                          placeholderTextColor={'#a1a1aa'}
                          autoComplete={'off'}
                          autoCapitalize="words"
                          maxLength={128}
                        />
                        <TextInput
                          style={styles.interestInput}
                          defaultValue={
                            userDetails.interests[1].name
                              ? userDetails.interests[1].name
                              : interest2
                          }
                          onChangeText={(value) => setInterest2(value)}
                          placeholder={
                            userDetails.interests[1].name
                              ? userDetails.interests[1].name
                              : 'New York Yankees'
                          }
                          placeholderTextColor={'#a1a1aa'}
                          autoComplete={'off'}
                          autoCapitalize="words"
                          maxLength={128}
                        />
                        <TextInput
                          style={styles.interestInput}
                          defaultValue={
                            userDetails.interests[2].name
                              ? userDetails.interests[2].name
                              : interest3
                          }
                          onChangeText={(value) => setInterest3(value)}
                          placeholder={
                            userDetails.interests[2].name
                              ? userDetails.interests[2].name
                              : 'Anthony Edwards'
                          }
                          placeholderTextColor={'#a1a1aa'}
                          autoComplete={'off'}
                          autoCapitalize="words"
                          maxLength={128}
                        />
                        <TextInput
                          style={styles.interestInput}
                          defaultValue={
                            userDetails.interests[3].name
                              ? userDetails.interests[3].name
                              : interest4
                          }
                          onChangeText={(value) => setInterest4(value)}
                          placeholder={
                            userDetails.interests[3].name
                              ? userDetails.interests[3].name
                              : 'Phoenix Mercury'
                          }
                          placeholderTextColor={'#a1a1aa'}
                          autoComplete={'off'}
                          autoCapitalize="words"
                          maxLength={128}
                        />
                      </View>
                    </View>
                  }
                />
              </Modal>
            </View>

            {/* Password Modal */}
            <View style={styles.centeredView}>
              <Modal
                animationType="fade"
                transparent={true}
                visible={passwordModalVisible}
                onRequestClose={() => {
                  AlertMessage.AlertMessage('Modal has been closed.');
                  setPasswordModalVisible(!passwordModalVisible);
                }}
              >
                <ModalComponent
                  header={'Password'}
                  hideCheckBtn
                  closeModal={() => setPasswordModalVisible(false)}
                  modal={true}
                  input={
                    <View style={styles.modalContainer}>
                      <View style={styles.interestTagContainer}>
                        <View style={styles.modalInputContainer}>
                          {/* {errorUpdatePassword && (
                            <AlertMessage>{errorUpdatePassword}</AlertMessage>
                          )} */}

                          <Text style={styles.modalInputTitle}>
                            New password
                          </Text>

                          <TextInput
                            style={styles.modalInputSection}
                            secureTextEntry
                            onChangeText={(value) => setNewPassword(value)}
                            name="newPassword"
                            placeholderTextColor={'#a1a1aa'}
                            maxLength={25}
                          />
                        </View>
                        <View style={styles.modalInputContainer}>
                          <Text style={styles.modalInputTitle}>
                            Confirm password
                          </Text>

                          <TextInput
                            style={styles.modalInputSection}
                            secureTextEntry
                            onChangeText={(value) => setConfirmPassword(value)}
                            name="confirmNewPassword"
                            placeholderTextColor={'#a1a1aa'}
                            maxLength={25}
                          />
                        </View>
                      </View>

                      <TouchableOpacity
                        onPress={() =>
                          handleNewPassword(newPassword, confirmPassword)
                        }
                      >
                        <Text style={styles.btn}>Set new password</Text>
                      </TouchableOpacity>
                    </View>
                  }
                />
              </Modal>
            </View>

            <TouchableOpacity onPress={handleSubmit}>
              <Text style={styles.btn}>Save</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      )}
    </>
  );
};

export default ProfileSettingsRoute;
