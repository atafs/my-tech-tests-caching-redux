import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger'

import rootSaga from './sagas/rootSaga';

import { responseRequest } from './actions/responseActions';

const generateStore = rootReducers => {
    const middleware = []

    // logger middleware
    middleware.push(logger)

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  // create the store
  const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga)

  
  // test the actions
  store.subscribe(() => {})
  store.dispatch(responseRequest())

  return store;
};

export default generateStore;
