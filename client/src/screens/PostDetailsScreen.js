import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

const footerHeight = Dimensions.get('window').height / 15;

// Styles
import theme from '../styles/styles.theme';
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
      <View style={styles.footerContainer}>
        <Text style={styles.price}>$600</Text>

        <View style={styles.btnContainer}>
          <Text style={styles.makeOfferBtn}>Make offer</Text>
          <Text style={styles.buyBtn}>Buy</Text>
        </View>
      </View>
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
  footerContainer: {
    height: footerHeight,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: theme.BORDER_COLOR,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  makeOfferBtn: {
    marginRight: 10,
    fontSize: 15,
    fontWeight: '700',
    borderWidth: 2,
    borderRadius: 3,
    padding: 7,
  },
  buyBtn: {
    color: '#fff',
    backgroundColor: '#000',
    fontSize: 15,
    fontWeight: '700',
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 3,
    overflow: 'hidden',
    borderWidth: 2,
  },
});

export default PostDetailsScreen;
