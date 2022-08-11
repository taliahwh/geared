import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

// Styles
// import styles from '../styles/PostDetailsScreenStyles';

// Components
import AlertMessage from '../components/AlertMessage';
import PostDetailsCard from '../components/PostDetailsCard';

// Actions
import {
  getPostDetails,
  likePostFromDetails,
  savePost,
} from '../actions/postActions';

const PostDetailsScreen = ({ route, forSale, offers }) => {
  // Hooks
  const dispatch = useDispatch();

  // Params from navigation
  const { postId } = route.params;

  // Redux state
  const { _id: signedInUserId } = useSelector(
    (state) => state.userSignIn.userInfo
  );
  const { success: successLikePost } = useSelector(
    (state) => state.likePostDetailsScreen
  );
  const { success: successSavePost } = useSelector((state) => state.savePost);
  const {
    loading: loadingPostDetails,
    postDetails,
    error: errorPostDetails,
  } = useSelector((state) => state.postDetails);

  const Likes = ({ userLikedPost, likeCount }) => {
    // const userLikedPost = postDetails.likes.includes(signedInUserId);
    return (
      <>
        {userLikedPost ? (
          <View style={styles.likeBtnContainer}>
            <Ionicons name="thumbs-up" size={26} color="black" />
            <Text style={styles.likeCount}>{likeCount}</Text>
          </View>
        ) : (
          <View style={styles.likeBtnContainer}>
            <Ionicons name="thumbs-up-outline" size={26} color="black" />
            <Text style={styles.likeCount}>{likeCount}</Text>
          </View>
        )}
      </>
    );
  };

  useEffect(() => {
    dispatch(getPostDetails(postId));
  }, [dispatch, postId, successLikePost, successSavePost]);

  return (
    <>
      {loadingPostDetails && (
        <View style={styles.centered}>
          <ActivityIndicator />
        </View>
      )}
      {errorPostDetails && (
        <View style={styles.centered}>
          <AlertMessage>{errorPostDetails}</AlertMessage>
        </View>
      )}
      {postDetails && (
        <PostDetailsCard
          postId={postId}
          postDetails={postDetails}
          profileImage={postDetails.listedBy.profileImage}
          name={postDetails.listedBy.name}
          username={postDetails.listedBy.username}
          productImages={postDetails.images}
          likeCount={postDetails.likes.length}
          userLikedPost={postDetails.likes.includes(signedInUserId)}
          userSavedPost={postDetails.savedBy.includes(signedInUserId)}
          description={postDetails.description}
          numComments={postDetails.comments.length}
          condition={postDetails.condition}
          sport={postDetails.sport}
          forSale={postDetails.forSale}
          offers={postDetails.offers}
          userDateJoined={postDetails.listedBy.dateJoined}
          timePosted={moment(postDetails.createdAt)
            .startOf('minute')
            .fromNow()
            .toUpperCase()}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostDetailsScreen;
