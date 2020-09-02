import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

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

export const RootNavigator = (props: any) => {
  const {isLoggedIn} = props;
  return (
    <NavigationContainer>
      <RootStack isLoggedIn={isLoggedIn} />
    </NavigationContainer>
  );
};

RootNavigator.displayName = 'RootNavigator';
