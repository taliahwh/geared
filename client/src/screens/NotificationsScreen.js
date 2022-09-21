import React, { useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useFocusEffect, useScrollToTop } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Notification from '../components/Notification';
import AlertMessage from '../components/AlertMessage';

// Actions
import { getNotifications } from '../actions/userActions';

// Styles
import theme from '../styles/styles.theme';
import { useEffect } from 'react';

const NotificationScreen = () => {
  // Hooks
  const scrollRef = useRef(null);
  useScrollToTop(scrollRef);
  const dispatch = useDispatch();

  // Redux state
  const { _id: userId } = useSelector((state) => state.userSignIn.userInfo);

  const {
    loading: loadingNotifications,
    notifications,
    error: errorNotifications,
  } = useSelector((state) => state.notifications);

  const { success: successViewNotification } = useSelector(
    (state) => state.userViewNotification
  );

  const renderItem = ({ item }) => {
    return (
      <Notification
        profileImage={item.requestFrom.profileImage}
        username={item.requestFrom.username}
        timePosted={item.createdAt}
        notificationType={item.notificationType}
        postId={item.postId}
        postImage={item.postImage}
        commentBody={item.commentBody}
        isViewed={item.viewed}
        notificationId={item._id}
        // user={userDetails && userDetails}
      />
    );
  };

  // useFocusEffect(
  //   React.useCallback(() => {

  //   }, [dispatch, userId, successViewNotification])
  // );

  useEffect(() => {
    dispatch(getNotifications(userId));
  }, [dispatch, userId, successViewNotification]);

  return (
    <>
      {errorNotifications && (
        <View style={styles.centered}>
          <AlertMessage>{errorNotifications}</AlertMessage>
        </View>
      )}

      {loadingNotifications && (
        <View style={styles.centered}>
          <ActivityIndicator />
        </View>
      )}

      {notifications && notifications.length > 0 && (
        <View style={styles.container}>
          <FlatList
            ref={scrollRef}
            data={notifications}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            initialNumToRender={10}
          />
        </View>
      )}

      {notifications && notifications.length === 0 && (
        <View style={styles.centered}>
          <Text style={styles.text}>No notifications.</Text>
        </View>
      )}
    </>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.FEED_BACKGROUND,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.FEED_BACKGROUND,
  },
  text: {
    fontStyle: 'italic',
  },
});
