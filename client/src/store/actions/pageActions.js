export const SET_PAGE_IS_LOADING = 'SET_PAGE_IS_LOADING';
export const setPageIsLoadingAction = () => ({
	type: SET_PAGE_IS_LOADING,
	payload: true,
});

export const SET_PAGE_NOT_LOADING = 'SET_PAGE_NOT_LOADING';
export const setPageNotLoadingAction = () => ({
	type: SET_PAGE_NOT_LOADING,
	payload: false,
});
