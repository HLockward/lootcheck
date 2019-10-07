import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import App from './component/App';
import './index.css';

render(
    <Provider store={createStore(rootReducer, applyMiddleware(logger, thunk))}>
        <App />
    </Provider>, 
    document.getElementById('root')
);