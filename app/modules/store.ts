import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from './user/user.reducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import {Api} from 'services/api';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default async () => {
  const api = new Api();
  await api.setup();

  let store = createStore(
    persistedReducer,
    applyMiddleware(thunk.withExtraArgument(api)),
  );
  let persistor = persistStore(store);
  return {store, persistor};
};
