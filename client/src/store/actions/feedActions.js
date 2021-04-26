// GET FEED
export const GET_FEED_POSTS_REQUEST = 'GET_FEED_POSTS_REQUEST';
export const getFeedPostsRequestAction = () => ({
	type: GET_FEED_POSTS_REQUEST,
});

export const GET_FEED_POSTS_SUCCESS = 'GET_FEED_POSTS_SUCCESS';
export const getFeedPostsRequestSuccessAction = posts => ({
	type: GET_FEED_POSTS_SUCCESS,
	payload: posts,
});

export const GET_FEED_POSTS_FAILURE = 'GET_FEED_POSTS_FAILURE';
export const getFeedPostsRequestFailureAction = message => ({
	type: GET_FEED_POSTS_FAILURE,
	payload: message,
});

// CREATE FEED
export const CREATE_FEED_POST_REQUEST = 'CREATE_FEED_POST_REQUEST';
export const createFeedPostRequestAction = () => ({
	type: CREATE_FEED_POST_REQUEST,
});

export const CREATE_FEED_POST_SUCCESS = 'CREATE_FEED_POST_SUCCESS';
export const createFeedPostSuccessAction = () => ({
	type: CREATE_FEED_POST_SUCCESS,
});

export const CREATE_FEED_POST_FAILURE = 'CREATE_FEED_POST_FAILURE';
export const createFeedPostFailureAction = message => ({
	type: CREATE_FEED_POST_FAILURE,
	payload: message,
});
