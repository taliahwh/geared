import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const ProfileHeaderLoader = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: 170,
    width: '100%',
  },
  loaderContainer: {
    height: 135,
    width: 125,
    backgroundColor: '#e5e5e5',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    fontSize: 19,
    fontWeight: '600',
    color: '#737373',
    marginTop: 15,
  },
});

export default ProfileHeaderLoader;
