import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useFocusEffect, useScrollToTop } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

// Components
import FollowersCard from '../components/FollowersCard';
import AlertMessage from '../components/AlertMessage';

// Actions
import { viewFollowing } from '../actions/userActions';

const FollowingScreen = ({ route }) => {
  const { userId } = route.params;
  // Hooks
  const scrollRef = useRef(null);
  useScrollToTop(scrollRef);
  const dispatch = useDispatch();

  const {
    loading: loadingFollowing,
    following,
    error: errorFollowing,
  } = useSelector((state) => state.viewFollowing);

  const renderItem = ({ item }) => {
    return (
      <FollowersCard
        name={item.name}
        username={item.username}
        profileImage={item.profileImage}
        followerId={item._id}
      />
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(viewFollowing(userId));
    }, [dispatch])
  );

  return (
    <>
      {errorFollowing && (
        <View style={styles.centered}>
          <AlertMessage>{errorFollowing}</AlertMessage>
        </View>
      )}

      {loadingFollowing && (
        <View style={styles.centered}>
          <ActivityIndicator />
        </View>
      )}

      {following && following.length > 0 && (
        <View style={styles.container}>
          <FlatList
            ref={scrollRef}
            data={following.reverse()}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}

      {following && following.length === 0 && (
        <View style={styles.centered}>
          <Text style={styles.text}>Not following anyone yet.</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontStyle: 'italic',
  },
});

export default FollowingScreen;
