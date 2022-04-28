import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import paramsReducer from './parametersReducer.js';
import WelcomeReducer from './welcomeReducer.js';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    WelcomePage: WelcomeReducer,
    ParamsPage: paramsReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;