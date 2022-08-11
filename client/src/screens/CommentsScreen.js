import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

// Styles
import theme from '../styles/styles.theme';

// Components
import Comment from '../components/Comment';
import AlertMessage from '../components/AlertMessage';

// Actions
import { getPostDetails, comment } from '../actions/postActions';

const CommentsScreen = ({ route }) => {
  // Hooks
  const dispatch = useDispatch();
  const { postId, post } = route.params;

  const [commentBody, setCommentBody] = useState('');

  // Redux state
  const {
    loading: loadingPostDetails,
    postDetails,
    comments,
    error: errorPostDetails,
  } = useSelector((state) => state.postDetails);

  const { success: successComment } = useSelector((state) => state.comment);
  const { success: successDeleteComment } = useSelector(
    (state) => state.deleteComment
  );

  const { userDetails } = useSelector((state) => state.authUserDetails);
  const listedBy = postDetails && postDetails.listedBy.userId;

  const renderItem = ({ item }) => {
    const [first, last] = item.sender.name.split(' ');
    return (
      <Comment
        commentId={item._id}
        displayName={first}
        username={`${item.sender.username}`}
        timePosted={moment(item.createdAt)
          .startOf('minute')
          .fromNow()
          .toUpperCase()}
        commentMessage={item.content}
        userImage={item.sender.profileImage}
        commentingUserId={item.sender.userId}
        listedBy={listedBy}
        postOfComment={post}
      />
    );
  };

  const handleSubmitComment = () => {
    dispatch(comment(postId, commentBody));
    setCommentBody('');
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getPostDetails(postId));
    }, [dispatch, successComment, successDeleteComment])
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Create comment section */}
        <View style={styles.createCommentSection}>
          <Image
            style={styles.userImage}
            source={
              userDetails
                ? { uri: userDetails.profileImage }
                : {
                    uri: 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg',
                  }
            }
          />

          <TextInput
            style={styles.textInput}
            value={commentBody}
            onChangeText={(text) => setCommentBody(text)}
            placeholder={'Say something...'}
            placeholderTextColor={'#a1a1aa'}
            maxLength={400}
            multiline
          />
          <TouchableOpacity onPress={handleSubmitComment}>
            <Text style={styles.sendBtn}>SEND</Text>
          </TouchableOpacity>
        </View>

        {loadingPostDetails && <ActivityIndicator />}

        {errorPostDetails && (
          <View style={styles.centeredContainer}>
            <AlertMessage>{errorPostDetails}</AlertMessage>
          </View>
        )}

        {comments && comments.length > 0 && (
          <View style={styles.commentsSection}>
            <FlatList
              // ref={scrollRef}
              data={comments}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
            />
          </View>
        )}

        {comments && comments.length === 0 && (
          <View style={styles.centeredContainer}>
            <Text style={styles.alert}>No comments</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 10,
  },
  createCommentSection: {
    minHeight: 55,
    paddingHorizontal: 15,
    // marginTop: 10,
    borderBottomWidth: 1,
    borderColor: theme.BORDER_COLOR,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 3,
  },
  userImage: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    minHeight: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '96%',
    // backgroundColor: 'transparent',
  },
  sendBtn: {
    color: '#71717a',
    fontWeight: '500',
  },
  commentsSection: {
    marginTop: 10,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alert: {
    color: '#a1a1aa',
    fontStyle: 'italic',
  },
});
