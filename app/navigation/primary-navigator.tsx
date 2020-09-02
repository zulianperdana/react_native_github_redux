import React from 'react';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {HomeScreen, CommitScreen} from '../screens';

export type PrimaryParamList = {
  home: undefined;
  commit: undefined;
};

// Documentation: https://github.com/software-mansion/react-native-screens/tree/master/native-stack
const Stack = createNativeStackNavigator<PrimaryParamList>();

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="commit" component={CommitScreen} />
    </Stack.Navigator>
  );
}
