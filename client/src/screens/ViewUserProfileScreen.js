import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// Styles
import theme from '../styles/styles.theme';

// Components
import ProfileHeader from '../components/ProfileHeader';
import CollectionGrid from '../components/CollectionGrid';
import ProfileHeaderLoader from '../components/Loaders/ProfileHeaderLoader';
import AlertMessage from '../components/AlertMessage';

// Actions
import { getUserDetails } from '../actions/userActions';

const ViewUserProfileScreen = ({ route }) => {
  const { userId, num } = route.params;
  // console.log(Math.floor(100000 + Math.random() * 9000));

  // Hooks
  const dispatch = useDispatch();

  // State from redux
  const { _id: authUserId } = useSelector((state) => state.userSignIn.userInfo);
  const {
    loading: loadingUserDetails,
    userDetails,
    error: errorUserDetails,
  } = useSelector((state) => state.userDetails);

  const { success: successFollowUser } = useSelector(
    (state) => state.followUser
  );

  useEffect(() => {
    dispatch(getUserDetails(userId));
  }, [dispatch, successFollowUser, num]);

  return (
    <View style={styles.collectionContainter}>
      {/* {loadingUserDetails && <ProfileHeaderLoader />} */}
      {errorUserDetails && <AlertMessage>{errorUserDetails}</AlertMessage>}
      {userDetails && (
        <ProfileHeader
          userId={userId}
          profileImage={userDetails.profileImage}
          name={userDetails.name}
          username={userDetails.username}
          bio={userDetails.bio}
          website={userDetails.website}
          interests={userDetails.interests}
          followingCount={userDetails.following.length}
          followersCount={userDetails.followers.length}
          isFollowing={userDetails.followers.includes(authUserId)}
        />
      )}

      <CollectionGrid userId={userId} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  label: {
    color: '#27272a',
    fontWeight: '600',
  },
  indicator: {
    backgroundColor: theme.PRIMARY_COLOR,
  },
  tabBar: {
    backgroundColor: '#fff',
  },
  collectionContainter: {
    flex: 1,
  },
});

export default ViewUserProfileScreen;
