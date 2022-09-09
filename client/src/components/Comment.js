import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

// Styles
import theme from '../styles/styles.theme';

// Actions
import { deleteComment } from '../actions/postActions';

const Comment = ({
  commentId,
  displayName,
  username,
  timePosted,
  userImage,
  commentMessage,
  commentingUserId,
  listedBy,
  postOfComment,
}) => {
  // Hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Redux state
  const { _id: loggedInUserId } = useSelector(
    (state) => state.userSignIn.userInfo
  );

  const handleDeleteComment = () => {
    dispatch(deleteComment(commentId, postOfComment));
  };

  const navigateToReportComment = () => {
    navigation.navigate('Report', {
      userId: commentingUserId,
      reportItemId: commentId,
      reportType: 'Comment',
    });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.userImage}
        source={{
          uri: userImage,
        }}
      />

      <View style={styles.commentContainer}>
        <View style={styles.commentHeader}>
          <View style={styles.userInfoContainer}>
            <Text style={styles.displayName}>{displayName}</Text>
            <Text style={styles.username}>{`@${username}`}</Text>
            <Text style={styles.timePosted}>{timePosted}</Text>
          </View>

          {listedBy === loggedInUserId ||
          commentingUserId === loggedInUserId ? (
            <View>
              <Pressable onPress={() => MenuProvider.open}>
                <Menu style={{ borderRadius: 5 }}>
                  <MenuTrigger>
                    <Ionicons
                      name="ellipsis-horizontal"
                      size={19}
                      color={theme.MEDIUM_GRAY}
                    />
                  </MenuTrigger>
                  <MenuOptions style={styles.menu}>
                    <MenuOption
                      onSelect={handleDeleteComment}
                      style={styles.menuOption}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          paddingVertical: 2,
                          // textAlign: 'center',
                          fontWeight: '500',
                          color: '#ef4444',
                        }}
                      >
                        Delete Comment
                      </Text>
                      <Ionicons
                        name="ios-trash-outline"
                        size={20}
                        color="#ef4444"
                      />
                    </MenuOption>
                    <View
                      style={{
                        borderTopWidth: 0.5,
                        borderColor: theme.DARK_MODE_BORDER,
                      }}
                    />
                    <MenuOption
                      onSelect={navigateToReportComment}
                      style={styles.menuOption}
                    >
                      <Text style={styles.menuOptionText}>Report</Text>
                      <Ionicons
                        name="ios-flag-outline"
                        size={20}
                        color={theme.LIGHT_GRAY}
                      />
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </Pressable>
            </View>
          ) : null}
        </View>

        <Text style={styles.commentMessage}>{commentMessage}</Text>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR,
  },
  commentContainer: {
    flex: 10,
    backgroundColor: theme.LIGHT_GRAY,
    borderRadius: 5,
    marginLeft: 10,
    // height: 80,
    paddingVertical: 7,
    paddingHorizontal: 7,
  },
  commentHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  displayName: {
    fontWeight: '500',
    fontSize: 16,
    marginRight: 3,
  },
  username: {
    fontWeight: '500',
    fontSize: 14,
    color: '#737373',
    marginRight: 6,
  },
  timePosted: {
    fontSize: 11,
    color: '#a3a3a3',
  },
  commentMessage: {
    marginTop: 5,
    // fontSize
  },
  menu: {
    padding: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  menuOption: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuContainer: {
    dispaly: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  menuOptionText: {
    fontSize: 15,
    padding: 5,
    textAlign: 'center',
    fontWeight: '500',
    color: theme.LIGHT_GRAY,
  },
});
