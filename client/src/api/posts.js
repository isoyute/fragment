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
const auth = axios.create({ withCredentials: true });

export const fetchPosts = () => dispatch => {
	dispatch(getFeedPostsRequestAction());

	auth
		.get(`${server}/api/posts/following`)
		.then(response => dispatch(getFeedPostsRequestSuccessAction(response.data)))
		.catch(error => dispatch(getFeedPostsRequestFailureAction(error.message)));
};

export const createPost = (userId, code, description) => dispatch => {
	dispatch(createFeedPostRequestAction());

	axios
		.post(`${server}/api/posts`, { userId, code, description })
		.then(response => {
			if (response.status !== 200) {
				return dispatch(
					createFeedPostFailureAction('Post could not be created. Try again!')
				);
			}

			dispatch(createFeedPostSuccessAction());
			dispatch(fetchPosts());
		})
		.catch(error => dispatch(createFeedPostFailureAction(error.message)));
};
