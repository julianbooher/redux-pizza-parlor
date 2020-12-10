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
    if(action.type === 'REMOVE_PIZZA'){
        let returnState = state.filter(pizza => pizza.id !== action.payload)
        return [...returnState]
    }
    return state
};



const customerInfoReducer = (state = [], action) => {
    //TODO action types
    if(action.type === 'ADD_NEW_CUSTOMER'){
        return [action.payload];
    }
    return state
};

const storeInstance = createStore(
    combineReducers({
        checkoutReducer,
        customerInfoReducer
    }), applyMiddleware(logger)

);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
