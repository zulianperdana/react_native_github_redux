import {GeneralApiProblem} from './api-problem';
import {UserDetails, CommitItem} from '@app/schemas';

export type GithubLoginResult =
  | {kind: 'ok'; user: UserDetails}
  | GeneralApiProblem;

export type SearchRepositoriesResults =
  | {kind: 'ok'; repositories: string[]}
  | GeneralApiProblem;

export type CommitResults =
  | {kind: 'ok'; commits: CommitItem[]}
  | GeneralApiProblem;
