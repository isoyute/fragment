import { SET_FEED_POSTS } from '../actions';

const initState = {
    posts: [],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_FEED_POSTS:
            return {
                ...state,
                posts: action.posts,
            };
        default:
            return state;
    }
};

export default reducer;
