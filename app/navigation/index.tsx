/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your PrimaryNavigator) which the user
 * will use once logged in.
 */
import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
import {LoginScreen, PasswordScreen, HomeScreen} from '@app/screens';

export const RootNavigator = (props: any) => {
  const {isLoggedIn} = props;
  return (
    <NativeRouter>
      <Route exact path="/" component={isLoggedIn ? HomeScreen : LoginScreen} />
      <Route exact path="/password" component={PasswordScreen} />
    </NativeRouter>
  );
};
