import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
  Linking,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

// Components
import Ratings from './Ratings';

// Styles
import styles from '../styles/ProfileHeaderStyles';
import theme from '../styles/styles.theme';

// Actions
import { followUser } from '../actions/userActions';

const TagRender = ({ name }) => <Text style={styles.tags}>{name}</Text>;

const Separator = () => {
  return <View style={{ width: 1, backgroundColor: '#fff' }} />;
};

const ProfileHeader = ({
  userId,
  profileImage,
  name,
  username,
  bio,
  website,
  interests,
  followingCount,
  followersCount,
  isFollowing,
  numReviews,
  reviewAvg,
}) => {
  // Hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleNavigate = (query) => {
    if (query === 'followers') {
      navigation.navigate('Followers', { userId });
    }
    if (query === 'following') {
      navigation.navigate('Following', { userId });
    }
  };

  const navigateToReportUser = () => {
    navigation.navigate('Report', {
      userId: userId,
      reportItemId: userId,
      reportType: 'User',
    });
  };

  const blockUser = () => {};

  const handleFollowUser = () => {
    dispatch(followUser(userId));
  };

  const navigateToReviews = () => {
    navigation.navigate('UserReviews', { username, userId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image
          style={styles.userImage}
          source={{
            uri: profileImage,
          }}
        />
        <View style={styles.userNameContainer}>
          <Text style={styles.userDisplayName}>{name}</Text>
          <Text style={styles.username}>{`@${username}`}</Text>

          <TouchableOpacity onPress={navigateToReviews} activeOpacity={0.9}>
            <View style={styles.ratingsContainer}>
              <Ratings rating={reviewAvg} />
              <Text style={{ color: theme.LIGHT_GRAY }}>({numReviews})</Text>
            </View>
          </TouchableOpacity>
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
                  onSelect={navigateToReportUser}
                  style={styles.menuOption}
                >
                  <Text style={styles.menuOptionText}>Report</Text>
                  <Ionicons
                    name="ios-flag-outline"
                    size={20}
                    color={theme.LIGHT_GRAY}
                  />
                </MenuOption>

                <View
                  style={{
                    borderTopWidth: 0.5,
                    borderColor: theme.DARK_MODE_BORDER,
                  }}
                />

                <MenuOption onSelect={blockUser} style={styles.menuOption}>
                  <Text style={styles.menuOptionText}>Block User</Text>
                  <Ionicons
                    name="ios-flag-outline"
                    size={20}
                    color={'transparent'}
                  />
                </MenuOption>
              </MenuOptions>
            </Menu>
          </Pressable>
        </View>
      </View>

      {bio !== '' && <Text style={styles.description}>{bio}</Text>}
      {website && (
        <Text
          style={styles.website}
          onPress={() => {
            Linking.openURL(`https://${website}`);
          }}
        >
          {website}
        </Text>
      )}

      {interests && (
        <View style={styles.tagsContainer}>
          <FlatList
            data={interests}
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
              <Text style={styles.count}>{followingCount}</Text>
              <Text style={{ color: theme.LIGHT_GRAY }}>following</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleNavigate('followers')}
            activeOpacity={1}
          >
            <View>
              <Text style={styles.count}>{followersCount}</Text>
              <Text style={{ color: theme.LIGHT_GRAY }}>followers</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.followBtnContainer}>
          <TouchableOpacity onPress={handleFollowUser} activeOpacity={0.7}>
            {isFollowing ? (
              <Text style={styles.followingBtn}>Following</Text>
            ) : (
              <Text style={styles.followBtn}>Follow</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
