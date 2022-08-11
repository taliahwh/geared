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
import { viewFollowers } from '../actions/userActions';

const FollowersScreen = ({ route }) => {
  const { userId } = route.params;
  // Hooks
  const scrollRef = useRef(null);
  useScrollToTop(scrollRef);
  const dispatch = useDispatch();

  const {
    loading: loadingFollowers,
    followers,
    error: errorFollowers,
  } = useSelector((state) => state.viewFollowers);

  const renderItem = ({ item }) => {
    // console.log(item);
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
      dispatch(viewFollowers(userId));
    }, [dispatch])
  );

  return (
    <>
      {errorFollowers && (
        <View style={styles.centered}>
          <AlertMessage>{errorFollowers}</AlertMessage>
        </View>
      )}

      {loadingFollowers && (
        <View style={styles.centered}>
          <ActivityIndicator />
        </View>
      )}

      {followers && followers.length > 0 && (
        <View style={styles.container}>
          <FlatList
            ref={scrollRef}
            data={followers.reverse()}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}

      {followers && followers.length === 0 && (
        <View style={styles.centered}>
          <Text style={styles.text}>No followers.</Text>
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

export default FollowersScreen;
