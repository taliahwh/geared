import geared from '../api/geared';

import {
  EXPLORE_POSTS_REQUEST,
  EXPLORE_POSTS_SUCCESS,
  EXPLORE_POSTS_FAILURE,
  FOLLOWING_POSTS_REQUEST,
  FOLLOWING_POSTS_SUCCESS,
  FOLLOWING_POSTS_FAILURE,
  CREATE_NEW_POST_REQUEST,
  CREATE_NEW_POST_SUCCESS,
  CREATE_NEW_POST_FAILURE,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAILURE,
  LIKE_POST_FROM_FEED_REQUEST,
  LIKE_POST_FROM_FEED_SUCCESS,
  LIKE_POST_FROM_FEED_FAILURE,
  LIKE_POST_FROM_DETAILS_REQUEST,
  LIKE_POST_FROM_DETAILS_SUCCESS,
  LIKE_POST_FROM_DETAILS_FAILURE,
  GET_LIKED_POSTS_REQUEST,
  GET_LIKED_POSTS_SUCCESS,
  GET_LIKED_POSTS_FAILURE,
  SAVE_POST_REQUEST,
  SAVE_POST_SUCCESS,
  SAVE_POST_FAILURE,
  COMMENT_POST_REQUEST,
  COMMENT_POST_SUCCESS,
  COMMENT_POST_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  GET_SAVED_POSTS_REQUEST,
  GET_SAVED_POSTS_SUCCESS,
  GET_SAVED_POSTS_FAILURE,
} from '../constants/postConstants';

export const getExplorePosts = () => async (dispatch, getState) => {
  dispatch({ type: EXPLORE_POSTS_REQUEST });

  const { authToken } = getState().userSignIn;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await geared.get('/api/posts/explore', config);

    dispatch({ type: EXPLORE_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: EXPLORE_POSTS_FAILURE });
    console.log(error.message);
  }
};

export const getFollowingPosts = () => async (dispatch, getState) => {
  dispatch({ type: FOLLOWING_POSTS_REQUEST });

  const { authToken } = getState().userSignIn;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await geared.get('/api/posts/following', config);

    dispatch({ type: FOLLOWING_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FOLLOWING_POSTS_FAILURE });
    console.log(error.message);
  }
};

export const createPost =
  (
    images,
    description,
    tags,
    sportValue,
    conditionValue,
    showcase,
    forSale,
    openToOffers,
    itemPrice,
    shippingPrice,
    locationValue
  ) =>
  async (dispatch, getState) => {
    dispatch({ type: CREATE_NEW_POST_REQUEST });

    const { authToken } = getState().userSignIn;
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      };

      const { data } = await geared.post(
        '/api/posts/',
        {
          images,
          description,
          tags,
          sportValue,
          conditionValue,
          showcase,
          forSale,
          openToOffers,
          itemPrice,
          shippingPrice,
          locationValue,
        },
        config
      );

      dispatch({ type: CREATE_NEW_POST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CREATE_NEW_POST_FAILURE });
      console.log(error.message);
    }
  };

export const getPostDetails = (id) => async (dispatch, getState) => {
  dispatch({ type: POST_DETAILS_REQUEST });

  const { authToken } = getState().userSignIn;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await geared.get(`/api/posts/${id}`, config);

    dispatch({ type: POST_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POST_DETAILS_FAILURE });
    console.log(error.message);
  }
};

export const likePost = (post) => async (dispatch, getState) => {
  dispatch({ type: LIKE_POST_FROM_FEED_REQUEST });

  const { authToken } = getState().userSignIn;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await geared.put(
      `/api/posts/${post._id}/likepost`,
      post,
      config
    );

    dispatch({ type: LIKE_POST_FROM_FEED_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LIKE_POST_FROM_FEED_FAILURE });
    console.log(error.message);
  }
};

export const likePostFromDetails = (post) => async (dispatch, getState) => {
  dispatch({ type: LIKE_POST_FROM_DETAILS_REQUEST });

  const { authToken } = getState().userSignIn;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await geared.put(
      `/api/posts/${post._id}/likepost`,
      post,
      config
    );

    dispatch({ type: LIKE_POST_FROM_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LIKE_POST_FROM_DETAILS_FAILURE });
    console.log(error.message);
  }
};

export const getLikedPosts = () => async (dispatch, getState) => {
  dispatch({ type: GET_LIKED_POSTS_REQUEST });

  const { authToken } = getState().userSignIn;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await geared.get(`/api/posts/likedposts`, config);

    dispatch({ type: GET_LIKED_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_LIKED_POSTS_FAILURE });
    console.log(error.message);
  }
};

export const savePost = (post) => async (dispatch, getState) => {
  dispatch({ type: SAVE_POST_REQUEST });

  const { authToken } = getState().userSignIn;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await geared.put(
      `/api/posts/${post._id}/savepost`,
      post,
      config
    );

    dispatch({ type: SAVE_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SAVE_POST_FAILURE });
    console.log(error.message);
  }
};

export const getSavedPosts = () => async (dispatch, getState) => {
  dispatch({ type: GET_SAVED_POSTS_REQUEST });

  const { authToken } = getState().userSignIn;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await geared.get(`/api/posts/savedposts`, config);

    dispatch({ type: GET_SAVED_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SAVED_POSTS_FAILURE });
    console.log(error.message);
  }
};

export const comment = (postId, commentBody) => async (dispatch, getState) => {
  dispatch({ type: COMMENT_POST_REQUEST });

  const { authToken } = getState().userSignIn;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    const { data } = await geared.post(
      `/api/posts/comment/${postId}`,
      { commentBody },
      config
    );

    dispatch({ type: COMMENT_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: COMMENT_POST_FAILURE });
    console.log(error.message);
  }
};

export const deleteComment =
  (commentId, post) => async (dispatch, getState) => {
    dispatch({ type: DELETE_COMMENT_REQUEST });

    const { authToken } = getState().userSignIn;
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      };

      const { data } = await geared.put(
        `/api/posts/deletecomment/${commentId}`,
        { post },
        config
      );

      dispatch({ type: DELETE_COMMENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELETE_COMMENT_FAILURE });
      console.log(error.message);
    }
  };
