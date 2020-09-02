import {RepositoryItem} from '.';

export type CommitState = {
  items: Record<string, RepositoryItem>;
  refreshing: boolean;
  loadingMore: boolean;
};
