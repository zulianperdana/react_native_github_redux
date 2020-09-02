import configureStore from '@app/modules/store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {fetchSuggestions} from './search.thunk';
import {searchReducer as reducer} from './search.reducer';
import {addToSearchHistory} from './search.actions';
import expect from 'expect';
import data from './__test__/data';

var mock = new MockAdapter(axios);

mock
  .onGet(
    'https://api.github.com/search/repositories?q=react%20in:name&per_page=10',
  )
  .reply(200, data);

describe('fetch suggestions', () => {
  it('should be debounced for 300ms', async () => {
    const {store} = await configureStore();
    store.dispatch(fetchSuggestions('react'));
    expect(store.getState().search.searchSuggestions.length).toEqual(0);
    setTimeout(() => {
      expect(store.getState().search.searchSuggestions.length).toEqual(10);
    }, 500);
  });
});

describe('search reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      searchValue: '',
      searchSuggestions: [],
      searchHistories: [],
    });
  });

  it('should handle ADD_TO_SEARCH_HISTORY', () => {
    expect(reducer(undefined, addToSearchHistory('react-native'))).toEqual({
      searchValue: '',
      searchSuggestions: [],
      searchHistories: ['react-native'],
    });
  });

  it('should not duplicate ADD_TO_SEARCH_HISTORY', () => {
    expect(
      reducer(
        {
          searchValue: '',
          searchSuggestions: [],
          searchHistories: ['react-native'],
        },
        addToSearchHistory('react-native'),
      ),
    ).toEqual({
      searchValue: '',
      searchSuggestions: [],
      searchHistories: ['react-native'],
    });
  });
});
