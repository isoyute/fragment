import { combineReducers } from 'redux';
import pageReducer from './reducers/page';
import userReducer from './reducers/user';

const reducer = combineReducers({
    page: pageReducer,
    user: userReducer,
});

export default reducer;
