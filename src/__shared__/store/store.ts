import { composeWithDevTools } from "redux-devtools-extension";
import { compose, createStore, GenericStoreEnhancer } from "redux";
import { initState, mainReducer } from "../../main/reducers/main";

const enhance = (() => {
  if (__DEV__) {
    return composeWithDevTools();
  } else {
    return <GenericStoreEnhancer>compose();
  }
})();

const configureStore = () => createStore(mainReducer, initState, enhance);

export const store = configureStore();
