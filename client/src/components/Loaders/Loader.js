import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator color="#737373" size="large" />
        <Text style={styles.loading}>Loading..</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 18,
    fontWeight: '600',
    color: '#737373',
    marginTop: 15,
  },
});

export default Loader;
