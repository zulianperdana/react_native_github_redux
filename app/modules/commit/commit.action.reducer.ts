import {createSlice} from '@reduxjs/toolkit';
import {CommitState, RepositoryItem} from '@app/schemas';

import {CLEAR_STATE} from '../global.actions';

const initialState: CommitState = {};

const setRepository = (
  state: CommitState,
  repository: string,
  change: (i: RepositoryItem) => RepositoryItem,
) => {
  const r: RepositoryItem = state[repository];
  return {...state, [repository]: change(r)};
};

const commitSlice = createSlice({
  name: 'commit',
  initialState: initialState,
  reducers: {
    [CLEAR_STATE]: () => initialState,
    addRepository: (state, {payload}) => ({
      ...state,
      [payload.repository]: payload,
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
    setRefreshing: (state, {payload}) =>
      setRepository(state, payload.repository, (r) => ({
        ...r,
        refreshing: payload.value,
      })),
    setLoadingMore: (state, {payload}) =>
      setRepository(state, payload.repository, (r) => ({
        ...r,
        loadingMore: payload.value,
      })),
    setCommits: (state, {payload}) =>
      setRepository(state, payload.repository, (r) => ({
        ...r,
        commits: payload.value,
      })),
  },
});

export const {actions, reducer} = commitSlice;
