// This is the vanilla way to create redux module(actions,reducers,thunk),
// this can also be done using Redux Toolkit https://redux-toolkit.js.org/tutorials/basic-tutorial
// please see commit module for Redux Toolkit implementation
import * as ACTIONS from './user.actionTypes';
import {CLEAR_STATE} from '../global.actions';
import {UserDetails, UserState} from '@app/schemas';

const initialState: UserState = {
  userDetails: {} as UserDetails,
  tempUserDetails: {} as UserDetails,
  username: '',
  isLoggedIn: false,
};

export function userReducer(
  state: UserState = initialState,
  {payload, type}: any,
): UserState {
  switch (type) {
    case ACTIONS.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: payload.userDetails,
        isLoggedIn: true,
      };
    case ACTIONS.SET_TEMPORARY_USER_DETAILS:
      return {...state, tempUserDetails: payload.userDetails};
    case ACTIONS.SET_USERNAME:
      return {...state, username: payload.username};
    case ACTIONS.SET_IS_LOGGED_IN:
      return {...state, isLoggedIn: payload.value};
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}
