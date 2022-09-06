import React, { useRef, useEffect } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useScrollToTop } from '@react-navigation/native';

// Components
import AlertMessage from '../components/AlertMessage';

// Actions
import { getSavedPosts } from '../actions/postActions';

// Styles
import theme from '../styles/styles.theme';

const cardWidth = Dimensions.get('window').width / 4;

const ImageRender = ({ src }) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={src} />
    </View>
  );
};
const Separator = () => {
  return <View style={{ width: 1, backgroundColor: '#fff' }} />;
};

const SavedRoute = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  useScrollToTop(scrollRef);

  // State from redux
  const {
    loading: loadingSavedPosts,
    posts,
    errpr: errorSavedPosts,
  } = useSelector((state) => state.savedPosts);
  const { success: successSavePost } = useSelector((state) => state.savePost);

  useEffect(() => {
    dispatch(getSavedPosts());
  }, [dispatch, successSavePost]);

  return (
    <>
      {loadingSavedPosts && <ActivityIndicator />}
      {errorSavedPosts && <AlertMessage>{errorSavedPosts}</AlertMessage>}
      {posts && posts.length > 0 && (
        <View style={styles.container}>
          <FlatList
            ref={scrollRef}
            data={posts}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  navigation.navigate('PostDetails', {
                    postId: item._id,
                  });
                }}
              >
                <ImageRender src={{ uri: item.images[0].imgUrl }} />
              </TouchableOpacity>
            )}
            numColumns={4}
            keyExtractor={(item) => `${item.id} 02135`}
            ItemSeparatorComponent={Separator}
          />
        </View>
      )}
      {posts && posts.length === 0 && (
        <View style={styles.noPostsContainer}>
          <Text style={{ color: theme.LIGHT_GRAY }}>No saved posts.</Text>
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
  imageContainer: {
    flexDirection: 'column',
    margin: 0.7,
    backgroundColor: theme.FEED_BACKGROUND,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: cardWidth,
    width: cardWidth,
  },
  noPostsContainer: {
    backgroundColor: theme.FEED_BACKGROUND,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
  },
});

export default SavedRoute;
