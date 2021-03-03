import {
	authUserRequestAction,
	authUserSuccessAction,
	authUserFailureAction,
} from '../store/actions/userActions';
import {
	setPageIsLoadingAction,
	setPageNotLoadingAction,
} from '../store/actions/pageActions';
import axios from 'axios';

const server = process.env.REACT_APP_SERVER_URL;
const auth = axios.create({ withCredentials: true });

export const fetchUser = () => dispatch => {
	dispatch(authUserRequestAction());
	dispatch(setPageIsLoadingAction());

	auth
		.get(`${server}/auth/github/user`)
		.then(response => dispatch(authUserSuccessAction(response.data.user)))
		.catch(error => dispatch(authUserFailureAction(error.message)))
		.finally(() => dispatch(setPageNotLoadingAction()));
};
