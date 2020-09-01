import {GithubLoginResult} from 'services/api/api.types';
import {Api} from 'services/api/api';
import {
  setUserDetails,
  setTemporaryUserDetails,
  clearState,
} from './user.reducer';
import {save, reset} from 'services/keychain';

export function loginToGithub(login: string, password: string) {
  return async function (dispatch: any, getState: any, api: Api) {
    const result: GithubLoginResult = await api.loginToGithub(login, password);
    if (result.kind === 'ok') {
      dispatch(setUserDetails(result.user, password));
      await save(result.user.username, password);
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
