export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

// DISPATCH ACTIONS
export const getUserRequestAction = () => ({
	type: GET_USER_REQUEST,
});

export const getUserSuccessAction = user => ({
	type: GET_USER_SUCCESS,
	payload: user,
});

export const getUserFailureAction = message => ({
	type: GET_USER_FAILURE,
	payload: message,
});
