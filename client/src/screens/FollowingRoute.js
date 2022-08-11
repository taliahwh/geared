import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useScrollToTop } from '@react-navigation/native';

// Components
import TradingCardPost from '../components/TradingCardPost';
import AlertMessage from '../components/AlertMessage';

// Actions
import { getFollowingPosts } from '../actions/postActions';

const windowWidth = Dimensions.get('window').width;

const FollowingRoute = () => {
  // Hooks
  const scrollRef = useRef(null);
  useScrollToTop(scrollRef);
  const dispatch = useDispatch();
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  // Redux state
  const {
    loading: loadingFollowingPosts,
    posts,
    error: errorFollowingPosts,
  } = useSelector((state) => state.followingPosts);

  const { success: successLikePost } = useSelector((state) => state.likePost);
  const { success: successSavePost } = useSelector((state) => state.savePost);

  const onRefresh = React.useCallback(() => {
    setIsRefreshing(true);

    setTimeout(() => setIsRefreshing(false), 2000);
    dispatch(getFollowingPosts());
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TradingCardPost
        post={item}
        username={item.listedBy.username}
        description={item.description}
        images={item.images}
        profileImage={item.listedBy.profileImage}
        location={item.listedBy.location}
        userProfileId={item.listedBy.userId}
        tags={item.tags}
        showcase={item.showcase}
        offers={item.openToOffers}
        forSale={item.forSale}
        datePosted={item.createdAt}
        likesCount={item.likes.length}
        likesIds={item.likes}
        savedBy={item.savedBy}
        postId={item._id}
        commentsCount={item.comments.length}
      />
    );
  };

  useEffect(() => {
    dispatch(getFollowingPosts());
  }, [dispatch, successLikePost, successSavePost]);

  return (
    <>
      {errorFollowingPosts && (
        <AlertMessage>{errorFollowingPosts}</AlertMessage>
      )}

      {loadingFollowingPosts && <ActivityIndicator />}

      {posts && posts.length > 0 && (
        <View style={styles.container}>
          <FlatList
            ref={scrollRef}
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item) => `${item._id}1`}
            refreshControl={
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      )}

      {posts && posts.length === 0 && (
        <View style={styles.centered}>
          <Text>Not following anyone yet.</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FollowingRoute;
