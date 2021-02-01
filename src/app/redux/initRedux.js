import {createStore, compose, applyMiddleware} from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function configureStore(onCompletion) {
  const sagaMiddleware = createSagaMiddleware();
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  const enhancers = compose(applyMiddleware(sagaMiddleware));
  let store = createStore(reducers, enhancers);
  let persistor = persistStore(store);

  sagaMiddleware.run(sagas);

  return {store, persistor};
}
