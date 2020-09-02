import configureStore from '@app/modules/store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {loadRepository, loadNextPage} from './commit.thunk';
import expect from 'expect';
import data from './__test__/data';

var mock = new MockAdapter(axios);

mock
  .onGet(
    'https://api.github.com/repos/facebook/react-native/commits?per_page=10&page=1',
  )
  .reply(200, data);

mock
  .onGet(
    'https://api.github.com/repos/facebook/react-native/commits?per_page=10&page=2',
  )
  .reply(200, data);

mock
  .onGet(
    'https://api.github.com/repos/facebook/react-nativeeeeee/commits?per_page=10&page=1',
  )
  .reply(200, {
    message: 'Not Found',
    documentation_url:
      'https://docs.github.com/rest/reference/repos#get-a-repository',
  });

const testRepository = 'facebook/react-native';

describe('fetch repositories', () => {
  it('add repository to state map when fetching has been done', async () => {
    const {store} = await configureStore();

    return store.dispatch(loadRepository(testRepository)).then((v) => {
      expect(v.payload).toEqual(true);
      expect(store.getState().commit.items[testRepository]).toBeDefined();
    });
  });

  it('add page when successfully load new page', async () => {
    const {store} = await configureStore();
    await store.dispatch(loadRepository(testRepository));
    return store
      .dispatch(loadNextPage({repositoryName: testRepository, reset: false}))
      .then(() => {
        expect(
          store.getState().commit.items[testRepository].currentPage,
        ).toEqual(2);
      });
  });

  it('reset page when reload repository', async () => {
    const {store} = await configureStore();
    await store.dispatch(loadRepository(testRepository));
    return store
      .dispatch(loadNextPage({repositoryName: testRepository, reset: true}))
      .then(() => {
        expect(
          store.getState().commit.items[testRepository].currentPage,
        ).toEqual(1);
      });
  });

  it('return error when repository not found', async () => {
    const {store} = await configureStore();

    return store
      .dispatch(loadRepository('facebook/react-nativeeeeee'))
      .then((v) => {
        expect(v.payload).toEqual(false);
      });
  });
});
