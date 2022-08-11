import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import AuthProfileHeader from './AuthProfileHeader';
import AuthCollectionGrid from './AuthCollectionGrid';

const AuthCollectionRoute = () => {
  return (
    <View style={styles.container}>
      <AuthProfileHeader />
      <AuthCollectionGrid />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AuthCollectionRoute;
