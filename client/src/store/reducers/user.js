import { SET_USER } from '../actions';

const initState = {
    user: null,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                user: action.user,
            };
        default:
            return state;
    }
};

export default reducer;
