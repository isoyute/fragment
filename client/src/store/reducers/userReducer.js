import {
	GET_USER_REQUEST,
	GET_USER_SUCCESS,
	GET_USER_FAILURE,
} from '../actions/userActions';

const initialState = {
	user: null,
	isLoading: true,
	errorMessage: '',
};

const handleGetUserRequest = () => ({
	...initialState,
});

const handleGetUserSuccess = payload => ({
	user: payload,
	isLoading: false,
	errorMessage: '',
});

const handleGetUserFailure = payload => ({
	user: null,
	isLoading: false,
	errorMessage: payload,
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_REQUEST:
			return handleGetUserRequest();
		case GET_USER_SUCCESS:
			return handleGetUserSuccess(action.payload);
		case GET_USER_FAILURE:
			return handleGetUserFailure(action.payload);
		default:
			return state;
	}
};

export default reducer;
