import { SET_IS_PAGE_LOADING } from '../actions';

const initState = {
    isPageLoading: false,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_IS_PAGE_LOADING:
            return {
                isPageLoading: action.isPageLoading,
            };
        default:
            return state;
    }
};

export default reducer;
