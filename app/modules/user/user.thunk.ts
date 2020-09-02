// This is the vanilla way to create redux module(actions,reducers,thunk),
// this can also be done using Redux Toolkit https://redux-toolkit.js.org/tutorials/basic-tutorial
// please see commit module for Redux Toolkit implementation
import {GithubLoginResult} from '@app/services/api/api.types';
import {Api} from '@app/services/api/api';
import {
  setUserDetails,
  setTemporaryUserDetails,
  clearState,
} from './user.reducer';
import {save, reset} from '@app/services/keychain';

export function loginToGithub(login: string, password: string) {
  return async function (dispatch: any, getState: any, api: Api) {
    const result: GithubLoginResult = await api.loginToGithub(login, password);
    if (result.kind === 'ok') {
      dispatch(setUserDetails(result.user, password));
      await save(result.user.username, password);
      await api.setup();
      return true;
    }
    return false;
  };
}

export function logout() {
  return async function (dispatch: any, getState: any, api: Api) {
    await reset();
    await api.setup();
    dispatch(clearState());
  };
}

export function checkUsername(username: string) {
  return async function (dispatch: any, getState: any, api: Api) {
    const result: GithubLoginResult = await api.getUser(username);
    if (result.kind === 'ok') {
      dispatch(setTemporaryUserDetails(result.user));
      return result.user;
    }
    return null;
  };
}
