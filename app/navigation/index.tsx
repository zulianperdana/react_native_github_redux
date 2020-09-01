/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your PrimaryNavigator) which the user
 * will use once logged in.
 */
import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {PrimaryNavigator} from './primary-navigator';
import {AuthNavigator} from './auth-navigator';

export type RootParamList = {
  primaryStack: undefined;
  authStack: undefined;
};

const Stack = createNativeStackNavigator<RootParamList>();

const RootStack = ({isLoggedIn}: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,

        stackPresentation: 'modal',
      }}>
      {!isLoggedIn ? (
        <Stack.Screen
          name="authStack"
          component={AuthNavigator}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="primaryStack"
          component={PrimaryNavigator}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<any>>
>((props: any, ref) => {
  const {password} = props;
  console.log('PASSWORD IS', password);
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack isLoggedIn={password !== undefined && password !== ''} />
    </NavigationContainer>
  );
});

RootNavigator.displayName = 'RootNavigator';
