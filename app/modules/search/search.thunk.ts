// This is the vanilla way to create redux module(actions,reducers,thunk),
// this can also be done using Redux Toolkit https://redux-toolkit.js.org/tutorials/basic-tutorial
// please see commit module for Redux Toolkit implementation
import {Api} from 'services/api/api';
import {replaceSuggestions} from './search.reducer';
import {debounce} from 'lodash';

export const debouncedSearchRepositories = debounce(
  (search: string, dispatch: any, api: Api) => {
    api.searchRepositories(search).then((result) => {
      if (result.kind === 'ok') {
        dispatch(replaceSuggestions(result.repositories));
      }
    });
  },
  300,
);

export function fetchSuggestions(search: string) {
  return async function (dispatch: any, getState: any, api: Api) {
    debouncedSearchRepositories(search, dispatch, api);
  };
}
