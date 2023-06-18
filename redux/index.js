import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import combinedReducers from './rootReducer';
import mainSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware /** more middlewares if any goes here */];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['login'],
};

const persistedReducer = persistCombineReducers(
  persistConfig,
  combinedReducers,
);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(mainSaga);

export {store};
