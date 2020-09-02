import {CommitItem} from '.';

export interface RepositoryItem {
  repository: string;
  showOnlyMyCommit: boolean;
  perPage: number;
  currentPage: number;
  paginationDone: boolean;
  refreshing: boolean;
  loadingMore: boolean;
  commits: CommitItem[];
}
