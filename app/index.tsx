import '@app/i18n';
import {ThemeProvider} from 'react-native-elements';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaProvider,
  initialWindowSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import configureStore, {RootState} from '@app/modules/store';
import {SplashScreen} from '@app/screens';
import {RootNavigator} from '@app/navigation';
function RootApp() {
  const [rootStore, setRootStore] = useState<any | undefined>(undefined);

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    (async () => {
      configureStore().then((value) => setRootStore(value));
    })();
  }, []);

  // display loading when store is not ready yet
  if (rootStore === undefined) {
    return <SplashScreen />;
  }
  const {store, persistor} = rootStore;

  // otherwise, we're ready to render the app
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainScreen />
      </PersistGate>
    </Provider>
  );
}

// Getting state value using [hooks] here
// Please see other for implementation using mapDispatchToProps and mapStateToProps
const MainScreen = function MainScreen() {
  const {darkMode, user} = useSelector((state: RootState) => state);
  const {password} = user;
  return (
    <ThemeProvider useDark={darkMode}>
      <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
        <RootNavigator password={password} />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default RootApp;
