import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

// Components
import ReviewComponent from '../components/ReviewComponent';

// Actions
import { getReviews } from '../actions/userActions';

// Styles
import theme from '../styles/styles.theme';

const ReviewsRoute = () => {
  const dispatch = useDispatch();
  const {
    loading: loadingReviews,
    reviews,
    error: errorReviews,
  } = useSelector((state) => state.reviews);

  const { _id: authUserId } = useSelector((state) => state.userSignIn.userInfo);

  const renderItem = ({ item }) => {
    return (
      <ReviewComponent
        rating={item.rating}
        username={item.sender.username}
        profileImage={item.sender.profileImage}
        productImage={item.productImage}
        reviewContent={item.review}
        datePosted={moment(item.createdAt)
          .startOf('minute')
          .fromNow()
          .toUpperCase()}
      />
    );
  };

  useEffect(() => {
    dispatch(getReviews(authUserId));
  }, [authUserId]);

  return (
    <>
      {loadingReviews && <ActivityIndicator />}

      {reviews && reviews.length > 0 && (
        <View style={styles.container}>
          <FlatList
            // ref={scrollRef}
            data={reviews}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            // refreshControl={
            //   <RefreshControl
            //     refreshing={isRefreshing}
            //     onRefresh={onRefresh}
            //     tintColor={theme.LIGHT_GRAY}
            //     />
            //   }
          />
        </View>
      )}

      {reviews && !reviews.length && (
        <View style={styles.centeredContainer}>
          <Text style={{ color: theme.LIGHT_GRAY }}>No reviews (yet).</Text>
        </View>
      )}

      {errorReviews && (
        <View style={styles.centeredContainer}>
          <Text style={{ color: theme.ALERT_COLOR, fontWeight: '600' }}>
            {errorReviews}
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.FEED_BACKGROUND,
  },
  centeredContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.FEED_BACKGROUND,
  },
});

export default ReviewsRoute;
