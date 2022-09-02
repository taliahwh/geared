import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import AuthProfileHeader from './AuthProfileHeader';
import AuthCollectionGrid from './AuthCollectionGrid';

// Styles
import theme from '../../styles/styles.theme';

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
    backgroundColor: theme.FEED_BACKGROUND,
  },
});

export default AuthCollectionRoute;
