import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import maxey from '../assets/test-images/maxey.jpg';
import { Ionicons } from '@expo/vector-icons';

// Styles
import theme from '../styles/styles.theme';

const Ratings = () => {
  return (
    <View style={styles.ratingsIconContainer}>
      <Ionicons
        name="star"
        size={13}
        color={theme.PRIMARY_COLOR}
        style={{ marginRight: 3 }}
      />
      <Ionicons
        name="star"
        size={13}
        color={theme.PRIMARY_COLOR}
        style={{ marginRight: 3 }}
      />
      <Ionicons
        name="star"
        size={13}
        color={theme.PRIMARY_COLOR}
        style={{ marginRight: 3 }}
      />
      <Ionicons
        name="star"
        size={13}
        color={theme.PRIMARY_COLOR}
        style={{ marginRight: 3 }}
      />
      <Ionicons
        name="star"
        size={13}
        color={theme.PRIMARY_COLOR}
        style={{ marginRight: 3 }}
      />
    </View>
  );
};

const ReviewComponent = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.userReviewInfoContainer}>
            <Image
              style={styles.userImage}
              source={{
                uri: 'https://i0.wp.com/sneakerhistory.com/wp-content/uploads/2019/03/fab-five-air-force-max-black-socks.jpg?fit=1280%2C1600&ssl=1',
              }}
            />
            <View style={styles.idk}>
              <Text style={styles.username}>fab_five</Text>
              {/* <View style={styles.ratingsContainer}> */}
              <Ratings />
              {/* </View> */}
              <Text style={styles.datePosted}>2 WEEKS AGO</Text>
            </View>
          </View>
          <Image style={styles.productImage} source={maxey} />
        </View>
        <View style={styles.reviewMessageContainer}>
          <Text style={styles.reviewMessage}>
            Seller was great! Card came in great condition.. and shipping was
            fast!
          </Text>
        </View>
      </View>
      <View style={styles.border} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  border: {
    borderTopWidth: 1,
    borderColor: theme.BORDER_COLOR,
    marginTop: 7,
  },
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
    borderColor: theme.BORDER_COLOR,
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
  },
  reviewStars: {
    // color: '#fff'
    marginTop: 1,
  },
  datePosted: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 1,
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
  },
});

export default ReviewComponent;
