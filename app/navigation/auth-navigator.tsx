import React from 'react';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {LoginScreen, PasswordScreen} from '../screens';

export type AuthParamList = {
  login: undefined;
  password: undefined;
};

// Documentation: https://github.com/software-mansion/react-native-screens/tree/master/native-stack
const Stack = createNativeStackNavigator<AuthParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="password" component={PasswordScreen} />
    </Stack.Navigator>
  );
}
