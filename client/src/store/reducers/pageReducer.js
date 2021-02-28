import {
	SET_PAGE_IS_LOADING,
	SET_PAGE_NOT_LOADING,
} from '../actions/pageActions';

const initialState = {
	isLoading: true,
};

const handleSetPageIsLoading = () => ({
	isLoading: true,
});

const handleSetPageNotLoading = () => ({
	isLoading: false,
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PAGE_IS_LOADING:
			return handleSetPageIsLoading();
		case SET_PAGE_NOT_LOADING:
			return handleSetPageNotLoading();
		default:
			return state;
	}
};

export default reducer;
