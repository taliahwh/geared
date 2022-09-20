import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import {
  createPostReducer,
  explorePostsReducer,
  followingPostsReducer,
  likePostReducer,
  commentPostReducer,
  postDetailsReducer,
  savePostsReducer,
  viewLikedPostsReducer,
  viewSavedPostsReducer,
  deleteCommentReducer,
  likePostFromDetailsScreenReducer,
  searchPostsReducer,
  deletePostReducer,
} from './reducers/postReducers';

import {
  authUserDetailsReducer,
  authUserPostsReducer,
  followUserReducer,
  notificationsReducer,
  postReviewReducer,
  savePushTokenReducer,
  unreadNotificationsReducer,
  userCompleteSignUpReducer,
  userDetailsReducer,
  userPostsReducer,
  userSignInReducer,
  userSignUpReducer,
  userUpdatePasswordReducer,
  userUpdateProfileReducer,
  viewFollowersReducer,
  viewFollowingReducer,
  viewNotificationReducer,
  viewReviewsReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
  explorePosts: explorePostsReducer,
  followingPosts: followingPostsReducer,
  createPost: createPostReducer,
  deletePost: deletePostReducer,
  postDetails: postDetailsReducer,
  likePost: likePostReducer,
  likePostDetailsScreen: likePostFromDetailsScreenReducer,
  likedPosts: viewLikedPostsReducer,
  savePost: savePostsReducer,
  savedPosts: viewSavedPostsReducer,
  comment: commentPostReducer,
  followUser: followUserReducer,
  viewFollowers: viewFollowersReducer,
  viewFollowing: viewFollowingReducer,
  notifications: notificationsReducer,
  deleteComment: deleteCommentReducer,
  userSignIn: userSignInReducer,
  completeSignUp: userCompleteSignUpReducer,
  userSignUp: userSignUpReducer,
  authUserDetails: authUserDetailsReducer,
  userDetails: userDetailsReducer,
  authUserPosts: authUserPostsReducer,
  userPosts: userPostsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdatePassword: userUpdatePasswordReducer,
  userViewNotification: viewNotificationReducer,
  unreadNotifications: unreadNotificationsReducer,
  reviews: viewReviewsReducer,
  newReview: postReviewReducer,
  savePushToken: savePushTokenReducer,
  searchPosts: searchPostsReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userSignIn'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

// Initial state when the redux store loads
const initialState = {};

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

export default store;
