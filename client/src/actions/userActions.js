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
  USER_POSTS_REQUEST,
  USER_POSTS_SUCCESS,
  USER_POSTS_FAILURE,
  AUTH_USER_POSTS_REQUEST,
  AUTH_USER_POSTS_SUCCESS,
  AUTH_USER_POSTS_FAILURE,
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
  USER_LOGOUT,
} from '../constants/userConstants';

import gearedApi from '../api/geared';

export const signIn = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGN_IN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await gearedApi.post(
      '/api/users/signin',
      { username, password },
      config
    );

    dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_SIGN_IN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};

export const signUp =
  (firstName, lastName, email, username, password, confirmPassword) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_SIGN_UP_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await gearedApi.post(
        '/api/users/signup',
        {
          firstName,
          lastName,
          email,
          username,
          password,
          confirmPassword,
        },
        config
      );

      dispatch({ type: USER_SIGN_UP_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_SIGN_UP_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const savePushToken = (pushToken) => async (dispatch, getState) => {
  const { authToken } = getState().userSignIn;
  try {
    dispatch({ type: GET_USER_PUSH_TOKEN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    await gearedApi.put('/api/users/pushtoken', { pushToken }, config);

    dispatch({ type: GET_USER_PUSH_TOKEN_SUCCESS });
  } catch (error) {
    dispatch({
      type: GET_USER_PUSH_TOKEN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAuthUserDetails = () => async (dispatch, getState) => {
  const { authToken } = getState().userSignIn;
  try {
    dispatch({ type: AUTH_USER_DETAILS_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await gearedApi.get(`/api/users/auth-details`, config);

    dispatch({ type: AUTH_USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: AUTH_USER_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  const { authToken } = getState().userSignIn;
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await gearedApi.get(`/api/users/${id}`, config);

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAuthUserPosts = () => async (dispatch, getState) => {
  const { authToken } = getState().userSignIn;
  try {
    dispatch({ type: AUTH_USER_POSTS_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await gearedApi.get(`/api/users/auth-collection`, config);

    dispatch({ type: AUTH_USER_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: AUTH_USER_POSTS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserPosts = (id) => async (dispatch, getState) => {
  const { authToken } = getState().userSignIn;
  try {
    dispatch({ type: USER_POSTS_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await gearedApi.get(`/api/users/collection/${id}`, config);

    dispatch({ type: USER_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_POSTS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProfile =
  (
    newProfileImage,
    newBio,
    interest1,
    interest2,
    interest3,
    interest4,
    newFullName,
    newWebsite
  ) =>
  async (dispatch, getState) => {
    const { authToken } = getState().userSignIn;
    try {
      dispatch({ type: UPDATE_USER_PROFILE_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      };

      const { data } = await gearedApi.put(
        '/api/users/profile',
        {
          newProfileImage,
          newBio,
          interest1,
          interest2,
          interest3,
          interest4,
          newFullName,
          newWebsite,
        },
        config
      );

      dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_PROFILE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updatePassword =
  (newPassword, confirmPassword) => async (dispatch, getState) => {
    const { authToken } = getState().userSignIn;
    try {
      dispatch({ type: UPDATE_PASSWORD_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      };

      const { data } = await gearedApi.put(
        '/api/users/password',
        {
          newPassword,
          confirmPassword,
        },
        config
      );

      dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_PASSWORD_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const completeSignUp =
  (
    dateOfBirth,
    newProfileImage,
    newBio,
    interest1,
    interest2,
    interest3,
    interest4,
    newFullName,
    newWebsite
  ) =>
  async (dispatch, getState) => {
    const { token: authToken } = getState().userSignUp.userInfo;
    try {
      dispatch({ type: COMPLETE_SIGN_UP_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      };

      const { data } = await gearedApi.put(
        '/api/users/profile',
        {
          dateOfBirth,
          newProfileImage,
          newBio,
          interest1,
          interest2,
          interest3,
          interest4,
          newFullName,
          newWebsite,
        },
        config
      );

      dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });
      dispatch({ type: COMPLETE_SIGN_UP_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: COMPLETE_SIGN_UP_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const viewNotification =
  (notificationId) => async (dispatch, getState) => {
    const { authToken } = getState().userSignIn;
    try {
      dispatch({ type: VIEW_NOTIFICATION_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      };

      const { data } = await gearedApi.put(
        `api/users/notifications/${notificationId}`,
        {
          notificationId,
        },
        config
      );

      dispatch({ type: VIEW_NOTIFICATION_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: VIEW_NOTIFICATION_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getNotifications = (userId) => async (dispatch, getState) => {
  const { authToken } = getState().userSignIn;
  try {
    dispatch({ type: GET_NOTIFICATIONS_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await gearedApi.get(
      `api/users/notifications/${userId}`,
      config
    );

    dispatch({ type: GET_NOTIFICATIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_NOTIFICATIONS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const followUser = (userId) => async (dispatch, getState) => {
  const { authToken } = getState().userSignIn;
  try {
    dispatch({ type: FOLLOW_USER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await gearedApi.put(
      `api/users/follow/${userId}`,
      { userId },
      config
    );

    dispatch({ type: FOLLOW_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FOLLOW_USER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const viewFollowers = (userId) => async (dispatch, getState) => {
  const { authToken } = getState().userSignIn;
  try {
    dispatch({ type: VIEW_FOLLOWERS_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await gearedApi.get(
      `api/users/followers/${userId}`,
      config
    );

    dispatch({ type: VIEW_FOLLOWERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: VIEW_FOLLOWERS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const viewFollowing = (userId) => async (dispatch, getState) => {
  const { authToken } = getState().userSignIn;
  try {
    dispatch({ type: VIEW_FOLLOWING_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await gearedApi.get(
      `api/users/following/${userId}`,
      config
    );

    dispatch({ type: VIEW_FOLLOWING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: VIEW_FOLLOWING_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
