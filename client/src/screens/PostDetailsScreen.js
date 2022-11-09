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
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();

  // Params from navigation
  const { postId } = route.params;

  // Redux state
  const { _id: authUserId } = useSelector((state) => state.userSignIn.userInfo);
  const { success: successLikePost } = useSelector(
    (state) => state.likePostDetailsScreen
  );
  const { success: successSavePost } = useSelector((state) => state.savePost);
  const {
    loading: loadingPostDetails,
    postDetails,
    error: errorPostDetails,
  } = useSelector((state) => state.postDetails);

  const navigateToOfferScreen = () => {
    navigation.navigate('Offer');
  };

  const navigateToCheckoutScreen = () => {
    navigation.navigate('Checkout', {
      userId: postDetails.listedBy.userId,
      username: postDetails.listedBy.username,
      postId,
      productImage: postDetails.images[0].imgUrl,
      description: postDetails.description,
      itemPrice: postDetails.itemPrice,
    });
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
          userId={postDetails.listedBy.userId}
          postId={postId}
          postDetails={postDetails}
          profileImage={postDetails.listedBy.profileImage}
          name={postDetails.listedBy.name}
          username={postDetails.listedBy.username}
          productImages={postDetails.images}
          likeCount={postDetails.likes.length}
          userLikedPost={postDetails.likes.includes(authUserId)}
          userSavedPost={postDetails.savedBy.includes(authUserId)}
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

      {/* <View style={styles.footerContainer}>
            <Text style={styles.price}>${postDetails.itemPrice}</Text>

            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={navigateToOfferScreen}
                activeOpacity={0.8}
              >
                <Text style={styles.makeOfferBtn}>Make offer</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={navigateToCheckoutScreen}
                activeOpacity={0.8}
              >
                <Text style={styles.buyBtn}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.FEED_BACKGROUND,
  },
  footerContainer: {
    // height: footerHeight,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    backgroundColor: theme.FEED_BACKGROUND,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.LIGHT_GRAY,
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
    borderColor: theme.LIGHT_GRAY,
    color: theme.LIGHT_GRAY,
  },
  buyBtn: {
    color: theme.LIGHT_GRAY,
    backgroundColor: theme.DARK_MODE,
    fontSize: 15,
    fontWeight: '700',
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 3,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: theme.DARK_MODE,
  },
});

export default PostDetailsScreen;
