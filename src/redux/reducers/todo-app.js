import * as reducers from './index';

import { combineReducers } from 'redux';

const initialState = {
    filter: 'SHOW_ALL',
    todos: []
};

const todoApp =  combineReducers(reducers);

export default todoApp;
