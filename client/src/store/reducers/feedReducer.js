import {
	GET_FEED_POSTS_REQUEST,
	GET_FEED_POSTS_SUCCESS,
	GET_FEED_POSTS_FAILURE,
	CREATE_FEED_POST_REQUEST,
	CREATE_FEED_POST_SUCCESS,
	CREATE_FEED_POST_FAILURE,
} from '../actions/feedActions';

const initialState = {
	posts: [],
	isLoading: true,
	errorMessage: '',
};

const handleGetFeedPostsRequest = () => ({
	...initialState,
});

const handleCreateFeedPostRequest = state => ({
	...state,
	isLoading: true,
	errorMessage: '',
});

const handleGetFeedPostsSuccess = payload => ({
	posts: payload,
	isLoading: false,
});

const handleCreateFeedPostSuccess = state => ({
	...state,
	isLoading: false,
});

const handleGetFeedPostsFailure = payload => ({
	isLoading: false,
	errorMessage: payload,
});

const handleCreateFeedPostFailure = (state, payload) => ({
	...state,
	isLoading: false,
	errorMessage: payload,
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FEED_POSTS_REQUEST:
			return handleGetFeedPostsRequest();
		case GET_FEED_POSTS_SUCCESS:
			return handleGetFeedPostsSuccess(action.payload);
		case GET_FEED_POSTS_FAILURE:
			return handleGetFeedPostsFailure(action.payload);
		case CREATE_FEED_POST_REQUEST:
			return handleCreateFeedPostRequest(state);
		case CREATE_FEED_POST_SUCCESS:
			return handleCreateFeedPostSuccess(state);
		case CREATE_FEED_POST_FAILURE:
			return handleCreateFeedPostFailure(state, action.payload);
		default:
			return state;
	}
};

export default reducer;
