import {
	AUTH_USER_REQUEST,
	AUTH_USER_SUCCESS,
	AUTH_USER_FAILURE,
	SEARCH_USERS_REQUEST,
	SEARCH_USERS_SUCCESS,
	SEARCH_USERS_FAILURE,
} from '../actions/userActions';

const initialState = {
	user: null,
	usersSearchResult: null,
	isSearching: false,
	isLoading: true,
	errorMessage: '',
	searchErrorMessage: '',
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

const handleSearchUsersRequest = state => ({
	...state,
	isSearching: true,
});

const handleSearchUsersSuccess = (state, payload) => ({
	...state,
	isSearching: false,
	usersSearchResult: payload,
});
const handleSearchUsersFailure = (state, payload) => ({
	...state,
	isSearching: false,
	searchErrorMessage: payload,
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_USER_REQUEST:
			return handleAuthUserRequest();
		case AUTH_USER_SUCCESS:
			return handleAuthUserSuccess(action.payload);
		case AUTH_USER_FAILURE:
			return handleAuthUserFailure(action.payload);
		case SEARCH_USERS_REQUEST:
			return handleSearchUsersRequest(state);
		case SEARCH_USERS_SUCCESS:
			return handleSearchUsersSuccess(state, action.payload);
		case SEARCH_USERS_FAILURE:
			return handleSearchUsersFailure(state, action.payload);
		default:
			return state;
	}
};

export default reducer;
