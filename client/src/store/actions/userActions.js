// AUTH USER
export const AUTH_USER_REQUEST = 'AUTH_USER_REQUEST';
export const authUserRequestAction = () => ({
	type: AUTH_USER_REQUEST,
});

export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const authUserSuccessAction = user => ({
	type: AUTH_USER_SUCCESS,
	payload: user,
});

export const AUTH_USER_FAILURE = 'AUTH_USER_FAILURE';
export const authUserFailureAction = message => ({
	type: AUTH_USER_FAILURE,
	payload: message,
});

export const SEARCH_USERS_REQUEST = 'SEARCH_USERS_REQUEST';
export const searchUsersRequest = () => ({ type: SEARCH_USERS_REQUEST });

export const SEARCH_USERS_SUCCESS = 'SEARCH_USERS_SUCCESS';
export const searchUsersSuccess = users => ({
	type: SEARCH_USERS_SUCCESS,
	payload: users,
});

export const SEARCH_USERS_FAILURE = 'SEARCH_USERS_FAILURE';
export const searchUsersFailure = message => ({
	type: SEARCH_USERS_FAILURE,
	payload: message,
});
