import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store';
import './index.css';

const store = createStore(reducer);

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
