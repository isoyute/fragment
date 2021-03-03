import {
	getFeedPostsRequestAction,
	getFeedPostsRequestSuccessAction,
	getFeedPostsRequestFailureAction,
	createFeedPostRequestAction,
	createFeedPostSuccessAction,
	createFeedPostFailureAction,
} from '../store/actions/feedActions';
import axios from 'axios';

const server = process.env.REACT_APP_SERVER_URL;

export const fetchPosts = () => dispatch => {
	dispatch(getFeedPostsRequestAction());

	axios
		.get(`${server}/api/posts`)
		.then(response => dispatch(getFeedPostsRequestSuccessAction(response.data)))
		.catch(error => dispatch(getFeedPostsRequestFailureAction(error.message)));
};

export const createPost = (userId, description) => dispatch => {
	dispatch(createFeedPostRequestAction());

	axios
		.post(`${server}/api/posts`, { userId, description })
		.then(response => {
			if (response.status !== 201) {
				return dispatch(
					createFeedPostFailureAction('Post could not be created. Try again!')
				);
			}

			dispatch(createFeedPostSuccessAction());
			dispatch(fetchPosts());
		})
		.catch(error => dispatch(createFeedPostFailureAction(error.message)));
};
