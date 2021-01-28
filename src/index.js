import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import { StoreProvider } from 'easy-peasy';
import { PersistGate } from 'redux-persist/integration/react';

import { configureStore, persistor } from 'store/configureStore';
import App from 'containers/App';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(state);

const render = Component => {
  hydrate(
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </PersistGate>
    </StoreProvider>,
    document.getElementById('root'),
  );
};

loadableReady().then(() => {
  render(App);
});

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}
