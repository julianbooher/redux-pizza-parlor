import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


const checkoutReducer = (state = [], action) => {
    // TODO action types
    if(action.type === 'ADD_PIZZA'){
        return [...state, action.payload];
    }

    return state
};

const contactInfoReducer = (state = [], action) => {
    //TODO action types

    return state
};

const storeInstance = createStore(
    combineReducers({
        checkoutReducer,
        contactInfoReducer
    }), applyMiddleware(logger)

);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
