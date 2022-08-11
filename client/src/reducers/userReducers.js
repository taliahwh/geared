import {
  USER_SIGN_IN_REQUEST,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAILURE,
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAILURE,
  COMPLETE_SIGN_UP_REQUEST,
  COMPLETE_SIGN_UP_SUCCESS,
  COMPLETE_SIGN_UP_FAILURE,
  GET_USER_PUSH_TOKEN_REQUEST,
  GET_USER_PUSH_TOKEN_SUCCESS,
  GET_USER_PUSH_TOKEN_FAILURE,
  AUTH_USER_DETAILS_REQUEST,
  AUTH_USER_DETAILS_SUCCESS,
  AUTH_USER_DETAILS_FAILURE,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
  AUTH_USER_POSTS_REQUEST,
  AUTH_USER_POSTS_SUCCESS,
  AUTH_USER_POSTS_FAILURE,
  USER_POSTS_REQUEST,
  USER_POSTS_SUCCESS,
  USER_POSTS_FAILURE,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAILURE,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  VIEW_NOTIFICATION_REQUEST,
  VIEW_NOTIFICATION_SUCCESS,
  VIEW_NOTIFICATION_FAILURE,
  GET_NOTIFICATIONS_REQUEST,
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATIONS_FAILURE,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  VIEW_FOLLOWERS_REQUEST,
  VIEW_FOLLOWERS_SUCCESS,
  VIEW_FOLLOWERS_FAILURE,
  VIEW_FOLLOWING_REQUEST,
  VIEW_FOLLOWING_SUCCESS,
  VIEW_FOLLOWING_FAILURE,
  CLEAR_PROFILE_DATA,
  CLEAR_PASSWORD_DATA,
  CLEAR_POSTS_DATA,
  CLEAR_SIGN_UP_DATA,
  USER_LOGOUT,
} from '../constants/userConstants';

const initialState = {
  authToken: null,
  loading: false,
  userInfo: {},
};

export const userSignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case USER_SIGN_IN_SUCCESS:
      return {
        loading: false,
        success: true,
        authToken: action.payload.token,
        userInfo: {
          _id: action.payload._id,
          name: action.payload.name,
          email: action.payload.email,
          username: action.payload.username,
        },
        // notifications: action.payload.notifications,
        // savedPosts: action.payload.savedPosts,
        // likedPosts: action.payload.likedPosts,
      };
    case USER_SIGN_IN_FAILURE:
      return { ...state, error: action.payload };
    case USER_LOGOUT:
      return {
        authToken: null,
        userInfo: {},
      };
    default:
      return state;
  }
};

export const userSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_UP_REQUEST:
      return { loading: true };
    case USER_SIGN_UP_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_SIGN_UP_FAILURE:
      return { loading: false, error: action.payload };
    case CLEAR_SIGN_UP_DATA:
      return {};
    default:
      return state;
  }
};

export const userCompleteSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPLETE_SIGN_UP_REQUEST:
      return { loading: true };
    case COMPLETE_SIGN_UP_SUCCESS:
      return { loading: false, success: true };
    case COMPLETE_SIGN_UP_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const savePushTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_PUSH_TOKEN_REQUEST:
      return { loading: true };
    case GET_USER_PUSH_TOKEN_SUCCESS:
      return { loading: false, success: true };
    case GET_USER_PUSH_TOKEN_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const authUserDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER_DETAILS_REQUEST:
      return { loading: true };
    case AUTH_USER_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        userDetails: action.payload,
        unreadNotifications: action.payload.notifications.filter(
          (notification) => notification.viewed !== true
        ),
      };
    case AUTH_USER_DETAILS_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true };
    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        userDetails: action.payload,
        unreadNotifications: action.payload.notifications.filter(
          (notification) => notification.viewed !== true
        ),
      };
    case USER_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const authUserPostsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case AUTH_USER_POSTS_REQUEST:
      return { loading: true };
    case AUTH_USER_POSTS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
      };
    case AUTH_USER_POSTS_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userPostsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case USER_POSTS_REQUEST:
      return { loading: true };
    case USER_POSTS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
      };
    case USER_POSTS_FAILURE:
      return { loading: false, error: action.payload };
    case CLEAR_POSTS_DATA:
      return {};
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE_REQUEST:
      return { loading: true };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        loading: false,
        updatedUser: action.payload,
        success: true,
      };
    case UPDATE_USER_PROFILE_FAILURE:
      return { loading: false, error: action.payload };
    case CLEAR_PROFILE_DATA:
      return {};
    default:
      return state;
  }
};

export const userUpdatePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD_REQUEST:
      return { loading: true };
    case UPDATE_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload.message,
      };
    case UPDATE_PASSWORD_FAILURE:
      return { loading: false, error: action.payload };
    case CLEAR_PASSWORD_DATA:
      return {};

    default:
      return state;
  }
};

export const viewNotificationReducer = (state = {}, action) => {
  switch (action.type) {
    case VIEW_NOTIFICATION_REQUEST:
      return { loading: true };
    case VIEW_NOTIFICATION_SUCCESS:
      return {
        success: true,
      };
    case VIEW_NOTIFICATION_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const notificationsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_NOTIFICATIONS_REQUEST:
      return { loading: true };
    case GET_NOTIFICATIONS_SUCCESS:
      return {
        success: true,
        notifications: action.payload,
        unreadNotifications: action.payload.filter(
          (notification) => notification.viewed !== true
        ),
      };
    case GET_NOTIFICATIONS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const followUserReducer = (state = {}, action) => {
  switch (action.type) {
    case FOLLOW_USER_REQUEST:
      return { loading: true };
    case FOLLOW_USER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case FOLLOW_USER_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const viewFollowersReducer = (state = { followers: {} }, action) => {
  switch (action.type) {
    case VIEW_FOLLOWERS_REQUEST:
      return { loading: true };
    case VIEW_FOLLOWERS_SUCCESS:
      return {
        loading: false,
        success: true,
        followers: action.payload,
      };
    case VIEW_FOLLOWERS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const viewFollowingReducer = (state = { following: {} }, action) => {
  switch (action.type) {
    case VIEW_FOLLOWING_REQUEST:
      return { loading: true };
    case VIEW_FOLLOWING_SUCCESS:
      return {
        loading: false,
        success: true,
        following: action.payload,
      };
    case VIEW_FOLLOWING_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
