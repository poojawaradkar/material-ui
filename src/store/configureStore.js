import { createStore } from 'easy-peasy';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import localForage from 'localforage';

import models from '../models';

const store = createStore(
  models,
  {
    disableImmer: true,
    devTools: process.env.NODE_ENV === 'development',
    reducerEnhancer: reducer => persistReducer({
      key: 'root',
      storage: localForage,
      stateReconciler: autoMergeLevel2
    }, reducer)
  }
);

export const configureStore = () => {
  if (module.hot) {
    // Enable Webpack hot module replacement for models
    module.hot.accept('../models', () => {
      const nextRootModels = require('../models').default;
      store.reconfigure(nextRootModels);
    });
  }

  return store;
};

export const persistor = persistStore(store);

export const getStore = () => store;
