import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

// Styles
import styles from '../styles/TradingCardPostStyles';
import theme from '../styles/styles.theme';

// Components
import CarouselCards from './carousel/CarouselCards';

// Actions
import { likePost, savePost } from '../actions/postActions';

const TradingCardPost = ({
  forSale,
  offers,
  username,
  images,
  description,
  profileImage,
  postId,
  userProfileId,
  tags,
  showcase,
  datePosted,
  likesCount,
  likesIds,
  post,
  savedBy,
  commentsCount,
  tagOne,
  tagTwo,
  tagThree,
}) => {
  // Hooks
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Redux state
  const { _id: authUserId } = useSelector((state) => state.userSignIn.userInfo);

  const Likes = () => {
    const userLikedPost = likesIds.includes(authUserId);
    return (
      <>
        {userLikedPost ? (
          <View style={styles.likeBtnContainer}>
            <Ionicons name="thumbs-up" size={26} color={theme.LIGHT_GRAY} />
            <Text style={styles.likeCount}>{likesCount}</Text>
          </View>
        ) : (
          <View style={styles.likeBtnContainer}>
            <Ionicons
              name="thumbs-up-outline"
              size={26}
              color={theme.LIGHT_GRAY}
            />
            <Text style={styles.likeCount}>{likesCount}</Text>
          </View>
        )}
      </>
    );
  };

  const Saved = () => {
    const userSavedPost = savedBy.includes(authUserId);

    return (
      <>
        {/* {loadingSavePost && <ActivityIndicator />} */}
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

  const TagNameRender = ({ tagName }) => {
    return <Text style={styles.postTags}>{tagName}</Text>;
  };

  const handleLikePost = () => {
    dispatch(likePost(post));
  };

  const handleSavePost = () => {
    dispatch(savePost(post));
  };

  const navigateToProfileDetails = () => {
    if (userProfileId === authUserId) {
      navigation.navigate('UserProfile', {
        userId: userProfileId,
      });
    } else {
      navigation.navigate('ProfileDetails', {
        userId: userProfileId,
      });
    }
  };

  const navigateToComments = () => {
    navigation.navigate('Comments', {
      postId,
      post,
    });
  };

  const navigateToMessages = () => {
    navigation.navigate('Chat', {
      username,
      profileImage,
      userId: userProfileId,
    });
  };

  const navigateToReportPost = () => {
    navigation.navigate('Report', {
      userId: userProfileId,
      reportItemId: postId,
      reportType: 'Post',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View style={styles.userInformation}>
          <Image
            style={styles.userImage}
            // style={{ width: 40, height: 40, borderRadius: 40 / 2, flex: 1 }}
            source={{
              uri: profileImage,
            }}
          />

          <View style={styles.usernameContainer}>
            <TouchableOpacity onPress={navigateToProfileDetails}>
              <Text style={styles.username}>{username}</Text>
            </TouchableOpacity>
            {forSale && <Text style={styles.listingType}>FOR SALE 💸</Text>}
            {offers && <Text style={styles.listingType}>OPEN TO OFFERS❓</Text>}
            {showcase && <Text style={styles.listingType}>SHOWCASE 🌟</Text>}
          </View>
        </View>
        {authUserId !== userProfileId && (
          <Pressable onPress={() => MenuProvider.open}>
            <View style={styles.info}>
              {/* <Ionicons
              name="ellipsis-horizontal"
              size={24}
              color={theme.LIGHT_GRAY}
              style={styles.ellipsis}
            /> */}

              <Menu style={{ borderRadius: 5 }}>
                <MenuTrigger>
                  <Ionicons
                    name="ellipsis-horizontal"
                    size={24}
                    color={theme.MEDIUM_GRAY}
                  />
                </MenuTrigger>
                <MenuOptions style={styles.menu}>
                  <MenuOption
                    onSelect={navigateToReportPost}
                    style={styles.menuOption}
                  >
                    <Text style={styles.menuOptionText}>Report</Text>
                    <Ionicons
                      name="flag-outline"
                      size={20}
                      color={theme.LIGHT_GRAY}
                    />
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
          </Pressable>
        )}
      </View>
      <View style={styles.imageContainer}>
        <CarouselCards images={images} />
      </View>
      <View style={styles.buttonContainer}>
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

          {authUserId !== userProfileId && (
            <TouchableOpacity onPress={navigateToMessages} activeOpacity={0.8}>
              <Ionicons
                style={styles.btn}
                name="paper-plane-outline"
                size={26}
                color={theme.LIGHT_GRAY}
              />
            </TouchableOpacity>
          )}

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

      <ScrollView horizontal style={styles.tagsContainer}>
        {tagOne && <TagNameRender tagName={tagOne} />}
        {tagTwo && <TagNameRender tagName={tagTwo} />}
        {tagThree && <TagNameRender tagName={tagThree} />}
      </ScrollView>

      {commentsCount === 0 && (
        <TouchableOpacity onPress={navigateToComments} activeOpacity={0.9}>
          <Text style={styles.viewComments}>Add a comment</Text>
        </TouchableOpacity>
      )}

      {commentsCount > 5 && (
        <TouchableOpacity onPress={navigateToComments} activeOpacity={0.9}>
          <Text style={styles.viewComments}>
            View all {commentsCount} comments
          </Text>
        </TouchableOpacity>
      )}

      {commentsCount <= 5 && commentsCount > 0 && (
        <TouchableOpacity onPress={navigateToComments} activeOpacity={0.9}>
          <Text style={styles.viewComments}>View all comments</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.timePosted}>
        {moment(datePosted).startOf('minute').fromNow().toUpperCase()}
      </Text>
    </View>
  );
};

export default TradingCardPost;
