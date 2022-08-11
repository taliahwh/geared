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

// Styles
import styles from '../styles/ProfileHeaderStyles';
import theme from '../styles/styles.theme';

// Actions
import { logout, followUser } from '../actions/userActions';

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

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleFollowUser = () => {
    dispatch(followUser(userId));
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
          <View style={styles.ratingsContainer}>
            <Ionicons name="star" size={15} color={theme.PRIMARY_COLOR} />
            <Ionicons name="star" size={15} color={theme.PRIMARY_COLOR} />
            <Ionicons name="star" size={15} color={theme.PRIMARY_COLOR} />
            <Ionicons name="star" size={15} color={theme.PRIMARY_COLOR} />
            <Ionicons name="star" size={15} color={theme.PRIMARY_COLOR} />
            <Text>(13)</Text>
          </View>
        </View>

        <View>
          <Pressable
            style={styles.pickerContainer}
            onPress={() => MenuProvider.open}
          >
            <Menu>
              <MenuTrigger>
                <Ionicons name="ellipsis-horizontal" size={24} color="black" />
              </MenuTrigger>
              <MenuOptions style={styles.menu}>
                <MenuOption onSelect={handleLogout}>
                  <Text
                    style={{
                      fontSize: 15,
                      paddingVertical: 2,
                      textAlign: 'center',
                      fontWeight: '500',
                    }}
                  >
                    Sign Out
                  </Text>
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
              <Text>following</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleNavigate('followers')}
            activeOpacity={1}
          >
            <View>
              <Text style={styles.count}>{followersCount}</Text>
              <Text>followers</Text>
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
