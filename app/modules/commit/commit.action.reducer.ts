import {createSlice} from '@reduxjs/toolkit';
import {CommitState, RepositoryItem} from '@app/schemas';

import {CLEAR_STATE} from '../global.actions';

const initialState: CommitState = {
  items: {},
  loadingMore: false,
  refreshing: false,
};

const setRepository = (
  state: CommitState,
  repository: string,
  change: (i: RepositoryItem) => RepositoryItem,
) => {
  const r: RepositoryItem = state.items[repository];
  return {...state, items: {...state.items, [repository]: change(r)}};
};

const commitSlice = createSlice({
  name: 'commit',
  initialState: initialState,
  reducers: {
    addRepository: (state, {payload}) => ({
      ...state,
      items: {...state.items, [payload.repository]: payload},
    }),
    setShowOnlyMyCommit: (state, {payload}) =>
      setRepository(state, payload.repository, (r) => ({
        ...r,
        showOnlyMyCommit: payload.value,
      })),
    setCurrentPage: (state, {payload}) =>
      setRepository(state, payload.repository, (r) => ({
        ...r,
        currentPage: payload.value,
      })),
    setPaginationDone: (state, {payload}) =>
      setRepository(state, payload.repository, (r) => ({
        ...r,
        paginationDone: payload.value,
      })),
    setRefreshing: (state, {payload}) => ({
      ...state,
      refreshing: payload.value,
    }),
    setLoadingMore: (state, {payload}) => ({
      ...state,
      loadingMore: payload.value,
    }),
    setCommits: (state, {payload}) =>
      setRepository(state, payload.repository, (r) => ({
        ...r,
        commits: payload.value,
      })),
  },
  extraReducers: {
    [CLEAR_STATE]: () => initialState,
  },
});

export const {actions, reducer} = commitSlice;
