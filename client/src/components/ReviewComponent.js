import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import maxey from '../assets/test-images/maxey.jpg';

// Components
import Ratings from './Ratings';

// Styles
import theme from '../styles/styles.theme';

const ReviewComponent = ({
  rating,
  username,
  profileImage,
  productImage,
  reviewContent,
  datePosted,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.userReviewInfoContainer}>
            <Image
              style={styles.userImage}
              source={{
                uri: profileImage,
              }}
            />
            <View>
              <Text style={styles.username}>{username}</Text>
              {/* <View style={styles.ratingsContainer}> */}
              <Ratings rating={rating} />
              {/* </View> */}
              <Text style={styles.datePosted}>{datePosted}</Text>
            </View>
          </View>
          <Image style={styles.productImage} source={{ uri: productImage }} />
        </View>
        <View style={styles.reviewMessageContainer}>
          <Text style={styles.reviewMessage}>{reviewContent}</Text>
        </View>
      </View>
      <View style={styles.border} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.DARK_MODE,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
  },
  // border: {
  //   borderTopWidth: 1,
  //   borderColor: theme.DARK_MODE_BORDER,

  //   // marginTop: 7,
  // },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userReviewInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  userImage: {
    width: 57,
    height: 57,
    borderWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
    borderRadius: 1000,
    marginRight: 15,
  },
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
  reviewInfoContainer: {},
  username: {
    fontWeight: '700',
    color: theme.LIGHT_GRAY,
  },
  reviewStars: {
    // color: '#fff'
    marginTop: 1,
  },
  datePosted: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 1,
    color: theme.MEDIUM_GRAY,
  },
  productImage: {
    height: 60,
    width: 60,
    borderRadius: 3,
  },
  reviewMessageContainer: {
    paddingVertical: 4,
  },
  reviewMessage: {
    fontSize: 14,
    color: theme.LIGHT_GRAY,
  },
});

export default ReviewComponent;
