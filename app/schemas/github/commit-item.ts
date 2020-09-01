import {UserDetails} from '../index';

export interface CommitItem {
  author: UserDetails;
  committer: UserDetails;
  authorTime: Date;
  commiterTime: Date;
  message: string;
  sha: string;
  commentCount: number;
}
