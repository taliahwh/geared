import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useScrollToTop } from '@react-navigation/native';

// Components
import TradingCardPost from '../components/TradingCardPost';
import AlertMessage from '../components/AlertMessage';

// Actions
import { getExplorePosts } from '../actions/postActions';

// Styles
import theme from '../styles/styles.theme';

const windowWidth = Dimensions.get('window').width;

const ExploreRoute = () => {
  // Hooks
  const scrollRef = useRef(null);
  useScrollToTop(scrollRef);
  const dispatch = useDispatch();
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  // Redux state
  const {
    loading: loadingExplorePosts,
    posts,
    error: errorExplorePosts,
  } = useSelector((state) => state.explorePosts);

  const { success: successLikePost } = useSelector((state) => state.likePost);
  const { success: successSavePost } = useSelector((state) => state.savePost);
  const { success: successCreatePost } = useSelector(
    (state) => state.createPost
  );

  // const savedPosts = userDetails && userDetails.savedPosts;

  const onRefresh = React.useCallback(() => {
    setIsRefreshing(true);

    setTimeout(() => setIsRefreshing(false), 2000);
    dispatch(getExplorePosts());
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
        tagOne={item.tagNames.tagOne}
        tagTwo={item.tagNames.tagTwo}
        tagThree={item.tagNames.tagThree}
      />
    );
  };

  useEffect(() => {
    dispatch(getExplorePosts());
  }, [dispatch, successLikePost, successSavePost]);

  return (
    <>
      {errorExplorePosts && <AlertMessage>{errorExplorePosts}</AlertMessage>}

      {loadingExplorePosts && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      )}
      {posts && posts.length > 0 && (
        <View style={styles.container}>
          <FlatList
            ref={scrollRef}
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            refreshControl={
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.FEED_BACKGROUND,
    // width: windowWidth,
  },
  loadingContainer: {
    backgroundColor: theme.FEED_BACKGROUND,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
});

export default ExploreRoute;
