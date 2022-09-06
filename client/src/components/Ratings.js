import React from 'react';
import { View, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

// Styles
import theme from '../styles/styles.theme';

const Ratings = ({ rating }) => {
  return (
    <>
      {rating === 1 && (
        <View style={styles.ratingsIconContainer}>
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
        </View>
      )}

      {rating >= 1.5 && rating < 2 && (
        <View style={styles.ratingsIconContainer}>
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star-half-full"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
        </View>
      )}

      {rating == 2 && (
        <View style={styles.ratingsIconContainer}>
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
        </View>
      )}

      {rating >= 2.5 && rating < 3 && (
        <View style={styles.ratingsIconContainer}>
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star-half-full"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
        </View>
      )}

      {rating === 3 && (
        <View style={styles.ratingsIconContainer}>
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
        </View>
      )}

      {rating >= 3.5 && rating < 4 && (
        <View style={styles.ratingsIconContainer}>
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star-half-full"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
        </View>
      )}

      {rating === 4 && (
        <View style={styles.ratingsIconContainer}>
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.DARK_GRAY}
            style={{ marginRight: 3 }}
          />
        </View>
      )}

      {rating >= 4.5 && rating < 5 && (
        <View style={styles.ratingsIconContainer}>
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star-half-full"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
        </View>
      )}

      {rating === 5 && (
        <View style={styles.ratingsIconContainer}>
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
          <FontAwesome
            name="star"
            size={13}
            color={theme.STAR_COLOR}
            style={{ marginRight: 3 }}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  ratingsIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 3,
  },
  ratingsContainer: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'pink',
    width: '40%',
    justifyContent: 'space-between',
  },
});

export default Ratings;
