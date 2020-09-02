import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from './user/user.reducer';
import {setIsLoggedIn} from './user/user.actions';
import {darkModeReducer} from './dark-mode/dark-mode.reducer';
import {searchReducer} from './search/search.reducer';
import {reducer as commitReducer} from './commit/commit.action.reducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import {Api} from '@app/services/api';

const persistConfig = {
  key: 'persist',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: userReducer,
  darkMode: darkModeReducer,
  commit: commitReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default async () => {
  const api = new Api();

  //inject auth to api instance
  const isLoggedIn = await api.setup();

  let store = createStore(
    persistedReducer,
    applyMiddleware(thunk.withExtraArgument(api)),
  );
  store.dispatch(setIsLoggedIn(isLoggedIn));
  let persistor = persistStore(store);
  return {store, persistor};
};
