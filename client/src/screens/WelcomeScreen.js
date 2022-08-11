import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Video } from 'expo-av';
import CourtVideo from '../assets/videos/basketball.mp4';
import JumpshotVideo from '../assets/videos/jumpshot.mp4';
import BaseballVideo from '../assets/videos/baseball.mp4';
import FootballVideo from '../assets/videos/football.mp4';
import googleIcon from '../assets/google-color.png';

// Styles
import theme from '../styles/styles.theme';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const video = useRef(null);

  const random = (items) => {
    return items[Math.floor(Math.random() * items.length)];
  };

  const videos = [CourtVideo, JumpshotVideo, BaseballVideo, FootballVideo];

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Video
        ref={video}
        style={StyleSheet.absoluteFill}
        source={random(videos)}
        resizeMode="cover"
        isLooping
        isMuted
        shouldPlay
      />

      <View style={styles.container}>
        <Text style={styles.header}>geared</Text>

        <View style={styles.buttonContainer}>
          <View style={styles.googleBtnContainer}>
            <Image style={styles.googleIcon} source={googleIcon} />
            <Text style={styles.googleBtn}>Continue with Google</Text>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              navigation.navigate('Sign Up');
            }}
          >
            <Text style={styles.registerBtn}>Sign up with email</Text>
          </TouchableOpacity>

          <Text style={styles.or}>or</Text>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text style={styles.loginBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#fafafa',
    fontSize: 35,
    fontStyle: 'italic',
    fontWeight: '700',
    textAlign: 'center',
  },
  container: {
    // backgroundColor: 'orange',
    display: 'flex',
    width: '100%',
    height: '85%',
    paddingHorizontal: '7%',
    justifyContent: 'space-between',
  },
  buttonContainer: {},
  googleBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    marginBottom: 7,
  },
  googleBtn: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    // backgroundColor: '#e5e5e5',
    color: '#000',
  },
  googleIcon: {
    marginRight: 7,
    width: 20,
    height: 20,
  },
  registerBtn: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: theme.PRIMARY_COLOR,
    color: '#fff',
    paddingVertical: 11,
    // marginBottom: 7,
  },
  or: {
    paddingVertical: 7,
    textAlign: 'center',
    color: '#fff',
  },
  loginBtn: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#262626',
    color: '#fff',
    paddingVertical: 11,
  },
});

export default WelcomeScreen;
