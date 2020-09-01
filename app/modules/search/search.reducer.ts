// This is the vanilla way to create redux module(actions,reducers,thunk),
// this can also be done using Redux Toolkit https://redux-toolkit.js.org/tutorials/basic-tutorial
// please see commit module for Redux Toolkit implementation
import * as ACTIONS from './search.actions';
import {SearchState} from 'schemas';

const initialState: SearchState = {
  searchValue: '',
  searchSuggestions: [],
  searchHistories: [],
};

export function addToSearchHistory(search: string) {
  return {type: ACTIONS.ADD_TO_SEARCH_HISTORY, payload: {search}};
}

export function replaceSuggestions(suggestions: string[]) {
  return {type: ACTIONS.REPLACE_SUGGESTIONS, payload: {suggestions}};
}

export function setSearch(search: string) {
  return {type: ACTIONS.SET_SEARCH, payload: {search}};
}

export function userReducer(
  state: SearchState = initialState,
  {payload, type}: any,
): SearchState {
  switch (type) {
    case ACTIONS.ADD_TO_SEARCH_HISTORY:
      if (state.searchHistories.includes(payload.search)) {
        return state;
      }
      return {
        ...state,
        searchHistories: [...state.searchHistories, payload.search],
      };
    case ACTIONS.REPLACE_SUGGESTIONS:
      return {...state, searchSuggestions: payload.suggestions};
    case ACTIONS.SET_SEARCH:
      return {...state, searchValue: payload.search};
    default:
      return state;
  }
}
