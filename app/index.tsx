/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app or storybook.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigation, so head over there
 * if you're interested in adding screens and navigators.
 */
import './i18n';
import './utils/ignore-warnings';
import React, {useState, useEffect, useRef} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {
  SafeAreaProvider,
  initialWindowSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  useBackButtonHandler,
  RootNavigator,
  canExit,
  setRootNavigation,
} from './navigation';
import {
  RootStore,
  RootStoreProvider,
  setupRootStore,
  useStores,
} from './models';

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
import {enableScreens} from 'react-native-screens';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {observer} from 'mobx-react-lite';
enableScreens();

/**
 * This is the root component of our app.
 */
function App() {
  const navigationRef = useRef<NavigationContainerRef>();
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);

  setRootNavigation(navigationRef);
  useBackButtonHandler(navigationRef, canExit);

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    (async () => {
      setupRootStore().then(setRootStore);
    })();
  }, []);

  // otherwise, we're ready to render the app
  return (
    <RootStoreProvider value={rootStore}>
      <MainScreen navigationRef={navigationRef} />
    </RootStoreProvider>
  );
}

const MainScreen = observer(function MainScreen(props: any) {
  const {navigationRef} = props;
  const {darkMode, user} = useStores();
  const {password} = user;
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={darkMode ? eva.dark : eva.light}>
        <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
          <RootNavigator password={password} ref={navigationRef} />
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
});

export default App;
