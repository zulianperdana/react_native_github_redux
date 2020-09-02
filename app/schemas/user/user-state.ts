import {UserDetails} from '.';

export interface UserState {
  userDetails: UserDetails;
  tempUserDetails: UserDetails;
  username: string;
  isLoggedIn: boolean;
}
