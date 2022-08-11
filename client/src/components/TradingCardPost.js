import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

// Styles
import styles from '../styles/TradingCardPostStyles';

// Components
import CarouselCards from './carousel/CarouselCards';

// Actions
import { likePost, savePost } from '../actions/postActions';

const TagRender = ({ item }) => {
  return <Text style={styles.postTags}>{item}</Text>;
};
const Separator = () => {
  return <View style={{ width: 1, backgroundColor: '#fff' }} />;
};

/**
 * todo - Create a skeleton loader for TradingCardComponent to show instead on ActivityIndicator
 */

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
            <Ionicons name="thumbs-up" size={26} color="black" />
            <Text style={styles.likeCount}>{likesCount}</Text>
          </View>
        ) : (
          <View style={styles.likeBtnContainer}>
            <Ionicons name="thumbs-up-outline" size={26} color="black" />
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
          <Ionicons name="ios-bookmark" size={26} color="black" />
        ) : (
          <Ionicons name="bookmark-outline" size={26} color="black" />
        )}
      </>
    );
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
        <View style={styles.info}>
          <Ionicons
            name="ellipsis-horizontal"
            size={24}
            color="black"
            style={styles.ellipsis}
          />
        </View>
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

          <Ionicons
            style={styles.btn}
            name="paper-plane-outline"
            size={26}
            color="black"
          />
          <Ionicons
            style={styles.btn}
            name="share-outline"
            size={26}
            color="black"
          />
        </View>
      </View>

      <Text style={styles.descriptionContainer}>
        <Text style={styles.usernameInDescription}>{`${username} `}</Text>
        {description}
      </Text>

      <View style={styles.tagsContainer}>
        <FlatList
          data={tags}
          renderItem={({ item }) => item !== '' && <TagRender item={item} />}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={Separator}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

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
