/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { Provider } from "react-redux";
import { store } from "./__shared__/store/store";
import Main from "./main/components/main";


const App = () => (
  <Provider store={store}>
    <Main/>
  </Provider>
);

export default App;
