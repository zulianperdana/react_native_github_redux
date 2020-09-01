import {UserDetails} from '.';

export interface UserState {
  userDetails: UserDetails;
  tempUserDetails: UserDetails;
  username: string;
  password: string;
}
