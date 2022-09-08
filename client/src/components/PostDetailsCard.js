import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

// Styles
import styles from '../styles/PostDetailsScreenStyles';

// Components
import FullWidthCarouselCards from '../components/carousel/FullWidthCarouselCards';
import AlertMessage from '../components/AlertMessage';

// Actions
import { likePostFromDetails, savePost } from '../actions/postActions';

// Styles
import theme from '../styles/styles.theme';

const PostDetailsCard = ({
  userId,
  postDetails,
  postId,
  profileImage,
  name,
  username,
  productImages,
  likeCount,
  userLikedPost,
  userSavedPost,
  description,
  numComments,
  condition,
  sport,
  forSale,
  offers,
  userDateJoined,
  timePosted,
}) => {
  // Hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLikePost = () => {
    dispatch(likePostFromDetails(postDetails));
  };

  const handleSavePost = () => {
    dispatch(savePost(postDetails));
  };

  const navigateToComments = () => {
    navigation.navigate('Comments', {
      postId,
      post: postDetails,
    });
  };

  const navigateToReviews = () => {
    navigation.navigate('UserReviews', {
      username,
      userId,
    });
  };

  const Likes = () => {
    return (
      <>
        {userLikedPost ? (
          <View style={styles.likeBtnContainer}>
            <Ionicons name="thumbs-up" size={26} color={theme.LIGHT_GRAY} />
            <Text style={styles.likeCount}>{likeCount}</Text>
          </View>
        ) : (
          <View style={styles.likeBtnContainer}>
            <Ionicons
              name="thumbs-up-outline"
              size={26}
              color={theme.LIGHT_GRAY}
            />
            <Text style={styles.likeCount}>{likeCount}</Text>
          </View>
        )}
      </>
    );
  };

  const Saved = () => {
    return (
      <>
        {userSavedPost ? (
          <Ionicons name="ios-bookmark" size={26} color={theme.LIGHT_GRAY} />
        ) : (
          <Ionicons
            name="bookmark-outline"
            size={26}
            color={theme.LIGHT_GRAY}
          />
        )}
      </>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headingContainer}>
        <View style={styles.userInformation}>
          <Image style={styles.userImage} source={{ uri: profileImage }} />

          <View style={styles.usernameContainer}>
            <Text style={styles.username}>{username}</Text>

            {/* <Text style={styles.location}>Phoenix, Arizona</Text> */}
          </View>
        </View>
        <View style={styles.info}>
          <Ionicons
            name="ellipsis-horizontal"
            size={24}
            color={theme.LIGHT_GRAY}
            style={styles.ellipsis}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <FullWidthCarouselCards images={productImages} />
      </View>
      <View style={styles.buttonContainer}>
        {/* <View style={styles.likeBtnContainer}>
            <Ionicons name="thumbs-up-outline" size={26} color={theme.LIGHT_GRAY} />
            <Text style={styles.likeCount}>{postDetails.likes.length}</Text>
          </View> */}
        <TouchableOpacity activeOpacity={0.8} onPress={() => handleLikePost()}>
          <Likes />
        </TouchableOpacity>

        <View style={styles.shareBtns}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleSavePost()}
          >
            <Saved />
          </TouchableOpacity>

          <Ionicons
            style={styles.btn}
            name="paper-plane-outline"
            size={26}
            color={theme.LIGHT_GRAY}
          />
          <Ionicons
            style={styles.btn}
            name="share-outline"
            size={26}
            color={theme.LIGHT_GRAY}
          />
        </View>
      </View>
      <Text style={styles.descriptionContainer}>
        <Text style={styles.usernameInDescription}>{`${username} `}</Text>
        <Text style={{ color: theme.LIGHT_GRAY }}>{description}</Text>
      </Text>
      {/* <Text style={styles.viewComments}>View all 13 comments</Text> */}
      {numComments === 0 && (
        <TouchableOpacity onPress={navigateToComments} activeOpacity={0.9}>
          <Text style={styles.viewComments}>Add a comment</Text>
        </TouchableOpacity>
      )}
      {numComments > 5 && (
        <TouchableOpacity onPress={navigateToComments} activeOpacity={0.9}>
          <Text style={styles.viewComments}>
            View all {postDetails.comments.length} comments
          </Text>
        </TouchableOpacity>
      )}
      {numComments <= 5 && numComments > 0 && (
        <TouchableOpacity onPress={navigateToComments} activeOpacity={0.9}>
          <Text style={styles.viewComments}>View all comments</Text>
        </TouchableOpacity>
      )}
      <View style={styles.cardDetailsContainer}>
        <View style={styles.specsContainer}>
          <Text style={styles.specsType}>Condition</Text>
          <Text style={styles.specsLabel}>{condition}</Text>
        </View>
        <View style={styles.specsContainer}>
          <Text style={styles.specsType}>Sport</Text>
          <Text style={styles.specsLabel}>{sport}</Text>
        </View>
      </View>

      <Text style={styles.uploadDate}>{timePosted}</Text>
      <View style={styles.aboutTheSellerContainer}>
        {/* <Text style={styles.aboutTheSellerTitle}>About the seller</Text> */}
        <View style={styles.sellerInfoContainer}>
          <Image style={styles.sellerImage} source={{ uri: profileImage }} />
          <View style={styles.sellerNameContainer}>
            <Text style={styles.sellerName}>{name}</Text>
            <Text
              style={styles.sellerMeta}
            >{`JOINED ${userDateJoined.toUpperCase()}`}</Text>
          </View>
        </View>
        <View style={styles.sellerMenuContainer}>
          <TouchableOpacity onPress={navigateToReviews} activeOpacity={0.8}>
            <View style={styles.menuOption}>
              <View style={styles.menuOptionContainer}>
                <Text style={styles.menuTitle}>Sold reviews</Text>
                {/* <Text style={styles.menuQty} >22</Text> */}
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color={theme.LIGHT_GRAY}
                style={styles.menuArrow}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.menuOption}>
            <View style={styles.menuOptionContainer}>
              <Text style={styles.menuTitle}>Selling</Text>
              {/* <Text style={styles.menuQty}>67</Text> */}
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color={theme.LIGHT_GRAY}
              style={styles.menuArrow}
            />
          </View>
          <View style={styles.menuOption}>
            <View style={styles.menuOptionContainer}>
              <Text style={styles.menuTitle}>Message seller</Text>
              {/* <Text style={styles.menuQty}>22</Text> */}
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color={theme.LIGHT_GRAY}
              style={styles.menuArrow}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PostDetailsCard;
