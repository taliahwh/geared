import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import moment from 'moment';

// Styles
import theme from '../styles/styles.theme';

// Actions
import { viewNotification } from '../actions/userActions';

const Notification = ({
  profileImage,
  username,
  notificationType,
  timePosted,
  postId,
  postImage,
  commentBody,
  isViewed,
  notificationId,
  // user,
}) => {
  // Hooks
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleViewNotification = () => {
    dispatch(viewNotification(notificationId));
  };

  const handleNavigation = () => {
    if (notificationType === 'Comment') {
      navigation.navigate('Comments', { postId });
    }

    if (notificationType === 'Like Post') {
      navigation.navigate('PostDetails', { postId });
    }
  };
  return (
    <>
      {isViewed && (
        <TouchableOpacity
          onPress={() => {
            handleNavigation();
          }}
        >
          <View style={styles.isViewedContainer}>
            <Image
              style={styles.userImage}
              source={{
                uri: profileImage,
              }}
            />

            <View style={styles.content}>
              <View style={styles.sentence}>
                {/* <Text style={styles.username}>{username}</Text> */}

                {notificationType === 'Like Post' && (
                  <Text>
                    <Text style={styles.username}>{username}</Text>{' '}
                    <Text style={styles.subSentence}>liked your post.</Text>
                  </Text>
                )}

                {notificationType === 'Follow' && (
                  <Text>
                    <Text style={styles.username}>{username}</Text>{' '}
                    <Text style={styles.subSentence}>
                      started following you.
                    </Text>
                  </Text>
                )}

                {notificationType === 'Comment' && (
                  <Text>
                    <Text style={styles.username}>{username}</Text>{' '}
                    <Text style={styles.subSentence}>
                      commented on your post:{' '}
                      {commentBody.length > 80
                        ? `${commentBody.slice(0, 80)}...`
                        : commentBody}
                    </Text>
                  </Text>
                )}
              </View>
              <Text style={styles.timePosted}>
                {moment(timePosted).startOf('minute').fromNow().toUpperCase()}
              </Text>
            </View>

            {notificationType !== 'Follow' && (
              <Image
                style={styles.postImage}
                source={{
                  uri: postImage,
                }}
              />
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notViewedContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderColor: theme.BORDER_COLOR,
  },
  isViewedContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'space-between',
    backgroundColor: theme.DARK_MODE,
    borderBottomWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
  },
  content: {
    flex: 1,
    marginLeft: 10,
    marginRight: 8,
  },
  sentence: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 15,
    color: theme.LIGHT_GRAY,
  },
  subSentence: { color: theme.LIGHT_GRAY },
  username: {
    fontWeight: '600',
    paddingRight: 4,
    fontSize: 15,
    color: theme.LIGHT_GRAY,
  },
  timePosted: {
    fontSize: 10,
    marginTop: 2,
    color: theme.MEDIUM_GRAY,
  },
  postImage: {
    height: 50,
    width: 50,
  },
});
