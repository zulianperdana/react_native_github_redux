import configureStore from '@app/modules/store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {loginToGithub, checkUsername} from './user.thunk';
import expect from 'expect';
import data from './__test__/data';

var mock = new MockAdapter(axios);

mock.onGet('https://api.github.com/user').reply(200, data);
mock.onGet('https://api.github.com/users/zulianperdana').reply(200, data);

describe('check username', () => {
  it('should return user details', async () => {
    const {store} = await configureStore();
    return store.dispatch(checkUsername('zulianperdana')).then((v) => {
      expect(v.username).toEqual('zulianperdana');
    });
  });

  it('should set user to temporary state', async () => {
    const {store} = await configureStore();
    return store.dispatch(checkUsername('zulianperdana')).then((v) => {
      expect(store.getState().user.tempUserDetails.username).toEqual(
        'zulianperdana',
      );
    });
  });
});

describe('login', () => {
  it('should return true when success', async () => {
    const {store} = await configureStore();
    return store
      .dispatch(loginToGithub('zulianperdana', '******'))
      .then((v) => {
        expect(v).toEqual(true);
      });
  });

  it('should set user to state', async () => {
    const {store} = await configureStore();
    return store
      .dispatch(loginToGithub('zulianperdana', '******'))
      .then((v) => {
        expect(store.getState().user.userDetails.username).toEqual(
          'zulianperdana',
        );
      });
  });
});
