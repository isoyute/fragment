export const AUTH_USER_REQUEST = 'AUTH_USER_REQUEST';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_FAILURE = 'AUTH_USER_FAILURE';

// DISPATCH ACTIONS
export const authUserRequestAction = () => ({
	type: AUTH_USER_REQUEST,
});

export const authUserSuccessAction = user => ({
	type: AUTH_USER_SUCCESS,
	payload: user,
});

export const authUserFailureAction = message => ({
	type: AUTH_USER_FAILURE,
	payload: message,
});
