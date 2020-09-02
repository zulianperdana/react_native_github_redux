import {createSlice} from '@reduxjs/toolkit';
import {CommitState, RepositoryItem} from '@app/schemas';

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
    setCommits: (state, {payload}) =>
      setRepository(state, payload.repository, (r) => ({
        ...r,
        commits: payload.commits,
      })),
  },
});

export const {actions, reducer} = commitSlice;
