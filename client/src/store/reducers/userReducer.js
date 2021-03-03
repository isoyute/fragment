import {
	AUTH_USER_REQUEST,
	AUTH_USER_SUCCESS,
	AUTH_USER_FAILURE,
} from '../actions/userActions';

const initialState = {
	user: null,
	isLoading: true,
	errorMessage: '',
};

const handleAuthUserRequest = () => ({
	...initialState,
});

const handleAuthUserSuccess = payload => ({
	user: payload,
	isLoading: false,
	errorMessage: '',
});

const handleAuthUserFailure = payload => ({
	user: null,
	isLoading: false,
	errorMessage: payload,
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_USER_REQUEST:
			return handleAuthUserRequest();
		case AUTH_USER_SUCCESS:
			return handleAuthUserSuccess(action.payload);
		case AUTH_USER_FAILURE:
			return handleAuthUserFailure(action.payload);
		default:
			return state;
	}
};

export default reducer;
