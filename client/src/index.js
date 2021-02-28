import React from 'react';
import ReactDOM from 'react-dom';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './store';
import App from './App';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<React.StrictMode>
		<GeistProvider>
			<CssBaseline />
			<Provider store={store}>
				<App />
			</Provider>
		</GeistProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
