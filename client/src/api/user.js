import {
	getUserRequestAction,
	getUserSuccessAction,
	getUserFailureAction,
} from '../store/actions/userActions';
import {
	setPageIsLoadingAction,
	setPageNotLoadingAction,
} from '../store/actions/pageActions';
import axios from 'axios';

const server = process.env.REACT_APP_SERVER_URL;
const auth = axios.create({ withCredentials: true });

export const fetchUser = () => dispatch => {
	dispatch(getUserRequestAction());
	dispatch(setPageIsLoadingAction());

	auth
		.get(`${server}/auth/github/user`)
		.then(response => dispatch(getUserSuccessAction(response.data.user)))
		.catch(error => dispatch(getUserFailureAction(error.message)))
		.finally(() => dispatch(setPageNotLoadingAction()));
};
