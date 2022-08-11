import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

// Styles
import theme from '../styles/styles.theme';

const FollowersCard = ({ name, username, profileImage, followerId }) => {
  const navigation = useNavigation();

  // Redux state
  const { _id: authUserId } = useSelector((state) => state.userSignIn.userInfo);

  const handleNavigate = () => {
    navigation.navigate('ProfileDetails', {
      userId: followerId,
      num: Math.floor(100000 + Math.random() * 900000),
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigate} activeOpacity={0.9}>
        <View style={styles.imageAndContentContainer}>
          <Image
            style={styles.userImage}
            source={{
              uri: profileImage,
            }}
          />

          <View style={styles.content}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.username}>{`@${username}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageAndContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'orange',
    flex: 3,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR,
  },
  content: {
    marginLeft: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  username: {
    color: '#404040',
  },
  btnContainer: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  followBtn: {
    textAlign: 'center',
    fontWeight: '500',
    // backgroundColor: 'gray',
    color: theme.PRIMARY_COLOR,
    borderColor: theme.PRIMARY_COLOR,
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  followingBtn: {
    textAlign: 'center',
    fontWeight: '500',
    backgroundColor: theme.PRIMARY_COLOR,
    color: '#fff',
    borderColor: theme.PRIMARY_COLOR,
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default FollowersCard;
