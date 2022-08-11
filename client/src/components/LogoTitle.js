import React from 'react';
import { Image, StyleSheet } from 'react-native';

const LogoTitle = () => {
  return (
    <Image style={styles.logo} source={require('../assets/logo_title.png')} />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 115,
    height: 35,
    marginTop: 10,
  },
});

export default LogoTitle;
