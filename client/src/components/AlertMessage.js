import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AlertMessage = ({ children, success }) => {
  return (
    <>
      {success ? (
        <Text
          style={[
            styles.alert,
            { color: '#15803d', paddingTop: 0, marginBottom: 15 },
          ]}
        >
          {children}
        </Text>
      ) : (
        <Text style={styles.alert}>{children}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  alert: {
    // backgroundColor: '#f87171',
    color: '#f87171',
    paddingTop: 20,
    paddingBottom: 7,
    width: '100%',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default AlertMessage;
