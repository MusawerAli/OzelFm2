/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import NavigationProvider from './navigator';
import { enableFreeze } from 'react-native-screens';
import { SafeAreaView } from 'react-native';
const persistor = persistStore(store)

enableFreeze(true);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationProvider />
      </PersistGate>
     
    </Provider>
  );
}

export default App;
