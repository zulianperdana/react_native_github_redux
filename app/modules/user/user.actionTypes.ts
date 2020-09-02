// This is the vanilla way to create redux module(actions,reducers,thunk),
// this can also be done using Redux Toolkit https://redux-toolkit.js.org/tutorials/basic-tutorial
// please see commit module for Redux Toolkit implementation
const prefix = 'user/';
export const SET_USER_DETAILS = prefix + 'SET_USER_DETAILS';
export const SET_TEMPORARY_USER_DETAILS = prefix + 'SET_TEMPORARY_USER_DETAILS';
export const SET_USERNAME = prefix + 'SET_USERNAME';
export const SET_IS_LOGGED_IN = prefix + 'SET_IS_LOGGED_IN';
