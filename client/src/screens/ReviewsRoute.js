import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import ReviewComponent from '../components/ReviewComponent';

const ReviewsRoute = () => {
  return (
    <View style={styles.container}>
      <ReviewComponent />
      <ReviewComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ReviewsRoute;
