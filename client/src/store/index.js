import { combineReducers } from 'redux';
import pageReducer from './reducers/page';
import userReducer from './reducers/user';
import feedReducer from './reducers/feed';

const reducer = combineReducers({
    page: pageReducer,
    user: userReducer,
    feed: feedReducer,
});

export default reducer;
