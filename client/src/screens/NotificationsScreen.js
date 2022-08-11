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

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getNotifications(userId));
    }, [dispatch, userId, successViewNotification])
  );

  return (
    <>
      {errorNotifications && (
        <View style={styles.centered}>
          <AlertMessage>{errorUserDetails}</AlertMessage>
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
          />
        </View>
      )}

      {notifications && notifications.length === 0 && (
        <View style={styles.centered}>
          <Text style={styles.text}>No notifications.</Text>
        </View>
      )}

      {/* <Notification
        profileImage={
          'https://cdn.vox-cdn.com/thumbor/iDvzpmHdvj-DKCM1Vvbva-KW0Pw=/0x0:1930x2895/1200x800/filters:focal(758x559:1066x867)/cdn.vox-cdn.com/uploads/chorus_image/image/70931637/usa_today_18373357.0.jpg'
        }
        username={'juice777'}
        timePosted={'A MINUTE AGO'}
        notificationType={'Comment'}
        postImage={
          'https://cdn.vox-cdn.com/thumbor/iDvzpmHdvj-DKCM1Vvbva-KW0Pw=/0x0:1930x2895/1200x800/filters:focal(758x559:1066x867)/cdn.vox-cdn.com/uploads/chorus_image/image/70931637/usa_today_18373357.0.jpg'
        }
        commentBody={
          'Aye man this is cool.. hopefully Spida comes to NY this summer, hopefully Spida comes to NY this summer'
        }
      /> */}
    </>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontStyle: 'italic',
  },
});
