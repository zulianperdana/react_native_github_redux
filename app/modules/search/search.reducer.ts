// This is the vanilla way to create redux module(actions,reducers,thunk),
// this can also be done using Redux Toolkit https://redux-toolkit.js.org/tutorials/basic-tutorial
// please see commit module for Redux Toolkit implementation
import * as ACTIONS from './search.actionTypes';
import {CLEAR_STATE} from '../global.actions';
import {SearchState} from '@app/schemas';

const initialState: SearchState = {
  searchValue: '',
  searchSuggestions: [],
  searchHistories: [],
};

export function searchReducer(
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
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}
