import { combineReducers } from 'redux';
import pageReducer from './reducers/pageReducer';
import userReducer from './reducers/userReducer';
import feedReducer from './reducers/feedReducer';

const reducer = combineReducers({
	page: pageReducer,
	user: userReducer,
	feed: feedReducer,
});

export default reducer;
