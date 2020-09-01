// This is the vanilla way to create redux module(actions,reducers,thunk),
// this can also be done using Redux Toolkit https://redux-toolkit.js.org/tutorials/basic-tutorial
// please see commit module for Redux Toolkit implementation
const prefix = 'search/';
export const ADD_TO_SEARCH_HISTORY = prefix + 'ADD_TO_SEARCH_HISTORY';
export const REPLACE_SUGGESTIONS = prefix + 'REPLACE_SUGGESTIONS';
export const SET_SEARCH = prefix + 'SET_SEARCH';
