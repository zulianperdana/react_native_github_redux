import * as ACTIONS from './search.actionTypes';

export function addToSearchHistory(search: string) {
  return {type: ACTIONS.ADD_TO_SEARCH_HISTORY, payload: {search}};
}

export function replaceSuggestions(suggestions: string[]) {
  return {type: ACTIONS.REPLACE_SUGGESTIONS, payload: {suggestions}};
}

export function setSearch(search: string) {
  return {type: ACTIONS.SET_SEARCH, payload: {search}};
}
