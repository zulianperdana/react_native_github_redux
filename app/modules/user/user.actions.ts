import * as ACTIONS from './user.actionTypes';
import {CLEAR_STATE} from '../global.actions';
import {UserDetails} from '@app/schemas';

export function setUserDetails(userDetails: UserDetails, password: string) {
  return {type: ACTIONS.SET_USER_DETAILS, payload: {userDetails, password}};
}

export function setTemporaryUserDetails(userDetails: UserDetails) {
  return {type: ACTIONS.SET_TEMPORARY_USER_DETAILS, payload: {userDetails}};
}

export function setUsername(username: string) {
  return {type: ACTIONS.SET_USERNAME, payload: {username}};
}

export function setIsLoggedIn(value: boolean) {
  return {type: ACTIONS.SET_IS_LOGGED_IN, payload: {value}};
}

export function clearState() {
  return {type: CLEAR_STATE};
}
