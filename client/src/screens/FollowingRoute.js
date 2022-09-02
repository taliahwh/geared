import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useScrollToTop } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Components
import TradingCardPost from '../components/TradingCardPost';
import AlertMessage from '../components/AlertMessage';

// Actions
import { getFollowingPosts } from '../actions/postActions';

// Styles
import theme from '../styles/styles.theme';

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

  const refreshPage = () => {
    dispatch(getFollowingPosts());
  };

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
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={onRefresh}
                tintColor={theme.LIGHT_GRAY}
              />
            }
          />
        </View>
      )}

      {posts && posts.length === 0 && (
        <View style={styles.centered}>
          <TouchableOpacity onPress={refreshPage} activeOpacity={0.7}>
            <Ionicons
              name="ios-refresh-outline"
              size={25}
              color="black"
              style={{ marginBottom: 7 }}
            />
          </TouchableOpacity>

          <Text>Not following anyone yet.</Text>
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
  centered: {
    flex: 1,
    backgroundColor: theme.FEED_BACKGROUND,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FollowingRoute;
