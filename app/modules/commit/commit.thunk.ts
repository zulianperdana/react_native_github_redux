import {createAsyncThunk} from '@reduxjs/toolkit';
import {CommitResults} from '@app/services/api/api.types';
import {actions} from './commit.action.reducer';
import {Api} from '@app/services/api/api';

export const loadRepository = createAsyncThunk(
  'commit/loadRepository',
  async (repository: string, {dispatch, extra}: any) => {
    const api: Api = extra;
    const defaultPerPage = 10;
    const result: CommitResults = await api.getCommits(
      repository,
      false,
      defaultPerPage,
      1,
    );
    if (result.kind === 'ok') {
      dispatch(
        actions.addRepository({
          commits: result.commits,
          currentPage: 1,
          paginationDone: false,
          perPage: defaultPerPage,
          repository,
          showOnlyMyCommit: false,
        }),
      );
      return true;
    }
    return false;
  },
);

export interface LoadNextPageParam {
  repositoryName: string;
  reset: boolean;
}

export const loadNextPage = createAsyncThunk(
  'commit/loadNextPage',
  async (
    {repositoryName, reset}: LoadNextPageParam,
    {dispatch, getState, extra}: any,
  ) => {
    const api: Api = extra;
    const commit = getState().commit.items[repositoryName];
    if (!commit.paginationDone || reset) {
      const defaultPerPage = 10;
      const {repository, perPage, showOnlyMyCommit, currentPage} = commit;
      if (reset) {
        dispatch(actions.setRefreshing({value: true}));
      } else {
        dispatch(actions.setLoadingMore({value: true}));
      }
      const result: CommitResults = await api.getCommits(
        repository,
        showOnlyMyCommit ?? false,
        perPage ?? defaultPerPage,
        reset ? 1 : currentPage + 1,
      );
      if (reset) {
        dispatch(actions.setRefreshing({value: false}));
      } else {
        dispatch(actions.setLoadingMore({value: false}));
      }
      if (result.kind === 'ok') {
        if (result.commits.length === 0 && !reset) {
          dispatch(actions.setPaginationDone({repository, value: true}));
        } else {
          dispatch(
            actions.setCurrentPage({repository, value: currentPage + 1}),
          );
          if (reset) {
            dispatch(actions.setPaginationDone({repository, value: false}));
            dispatch(actions.setCurrentPage({repository, value: 1}));
            dispatch(actions.setCommits({repository, value: result.commits}));
          } else {
            dispatch(
              actions.setCommits({
                repository,
                value: [...commit.commits, ...result.commits],
              }),
            );
          }
        }
      }
    }
  },
);
