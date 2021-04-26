import {
	authUserRequestAction,
	authUserSuccessAction,
	authUserFailureAction,
	searchUsersRequest,
	searchUsersSuccess,
	searchUsersFailure,
} from '../store/actions/userActions';
import {
	setPageIsLoadingAction,
	setPageNotLoadingAction,
} from '../store/actions/pageActions';
import axios from 'axios';

const server = process.env.REACT_APP_SERVER_URL;
const auth = axios.create({ withCredentials: true });

export const fetchLoggedInUser = () => dispatch => {
	dispatch(authUserRequestAction());
	dispatch(setPageIsLoadingAction());

	auth
		.get(`${server}/auth/github/user`)
		.then(response => dispatch(authUserSuccessAction(response.data.user)))
		.catch(error => dispatch(authUserFailureAction(error.message)))
		.finally(() => dispatch(setPageNotLoadingAction()));
};

export const fetchUserByUsername = searchSubstring => dispatch => {
	dispatch(searchUsersRequest());

	axios
		.get(`${server}/api/users/search/${searchSubstring}`)
		.then(response => dispatch(searchUsersSuccess(response.data)))
		.catch(error => dispatch(searchUsersFailure(error.message)));
};
