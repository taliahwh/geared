import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
  Linking,
  Share,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

// Styles
import styles from '../../styles/AuthProfileHeaderStyles';
import theme from '../../styles/styles.theme';

// Components
import ProfileHeaderLoader from '../Loaders/ProfileHeaderLoader';
import AlertMessage from '../AlertMessage';
import Ratings from '../Ratings';

// Actions
import {
  logout,
  getAuthUserDetails,
  followUser,
} from '../../actions/userActions';

const TagRender = ({ name }) => <Text style={styles.tags}>{name}</Text>;
const Separator = () => {
  return <View style={{ width: 1, backgroundColor: '#fff' }} />;
};

const AuthProfileHeader = () => {
  // Hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // State from redux
  const { _id: userId } = useSelector((state) => state.userSignIn.userInfo);
  const {
    loading: loadingUserDetails,
    userDetails,
    error: errorUserDetails,
  } = useSelector((state) => state.authUserDetails);

  const { success: successUpdateProfile } = useSelector(
    (state) => state.userUpdateProfile
  );

  const { success: successFollowUser } = useSelector(
    (state) => state.followUser
  );

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleNavigate = (query) => {
    if (query === 'followers') {
      navigation.navigate('Followers', { userId });
    }
    if (query === 'following') {
      navigation.navigate('Following', { userId });
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(getAuthUserDetails());
  }, [dispatch, successUpdateProfile, successFollowUser]);

  return (
    <View style={styles.container}>
      {loadingUserDetails && <ProfileHeaderLoader />}
      {errorUserDetails && <AlertMessage>{errorUserDetails}</AlertMessage>}

      {userDetails && (
        <>
          <View style={styles.userInfoContainer}>
            <Image
              style={styles.userImage}
              source={{
                uri: userDetails.profileImage,
              }}
            />
            <View style={styles.userNameContainer}>
              <Text style={styles.userDisplayName}>{userDetails.name}</Text>
              <Text style={styles.username}>{`@${userDetails.username}`}</Text>
              <View style={styles.ratingsContainer}>
                <Ratings rating={userDetails.reviewAvg || 4.5} />
                <Text style={{ color: theme.LIGHT_GRAY }}>
                  ({userDetails.numReviews || 10})
                </Text>
              </View>
            </View>

            <View>
              <Pressable
                style={styles.pickerContainer}
                onPress={() => MenuProvider.open}
              >
                <Menu style={{ borderRadius: 5 }}>
                  <MenuTrigger>
                    <Ionicons
                      name="ellipsis-horizontal"
                      size={24}
                      color={theme.LIGHT_GRAY}
                    />
                  </MenuTrigger>
                  <MenuOptions style={styles.menu}>
                    <MenuOption
                      onSelect={handleLogout}
                      style={styles.menuOption}
                    >
                      <Text style={styles.menuOptionText}>Sign Out</Text>
                      <Ionicons
                        name="exit-outline"
                        size={24}
                        color={'#C7372F'}
                      />
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </Pressable>
            </View>
          </View>

          {userDetails.bio !== '' && (
            <Text style={styles.description}>{userDetails.bio}</Text>
          )}

          {userDetails.website && (
            <Text
              style={styles.website}
              onPress={() => {
                Linking.openURL(`https://${userDetails.website}`);
              }}
            >
              {userDetails.website}
            </Text>
          )}

          {/* Checks if the interests arr is empty */}
          {userDetails.interests && userDetails.interests[0].name !== null && (
            <View style={styles.tagsContainer}>
              <FlatList
                data={userDetails.interests}
                renderItem={({ item }) =>
                  item.name !== null && <TagRender name={item.name} />
                }
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={Separator}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          )}

          <View style={styles.followersAndShareContainer}>
            <View style={styles.followersContainer}>
              <TouchableOpacity
                onPress={() => handleNavigate('following')}
                activeOpacity={1}
              >
                <View>
                  <Text style={styles.count}>
                    {userDetails.following.length}
                  </Text>
                  <Text style={{ color: theme.LIGHT_GRAY }}>following</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleNavigate('followers')}
                activeOpacity={1}
              >
                <View>
                  <Text style={styles.count}>
                    {userDetails.followers.length}
                  </Text>
                  <Text style={{ color: theme.LIGHT_GRAY }}>followers</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity onPress={handleShare}> */}
            <View style={styles.shareBtnContainer}>
              <Text style={styles.shareBtn}>Share collection</Text>
            </View>
            {/* </TouchableOpacity> */}
          </View>
        </>
      )}
    </View>
  );
};

export default AuthProfileHeader;
