import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, compose, createStore, GenericStoreEnhancer } from "redux";
import { initState, mainReducer } from "../../main/reducers/main";
import { mainEpic } from "../../main/epics/main";
import { createEpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware(mainEpic);

const enhance = (() => {
  if (__DEV__) {
    return composeWithDevTools(applyMiddleware(epicMiddleware));
  } else {
    return <GenericStoreEnhancer>compose(applyMiddleware(epicMiddleware));
  }
})();

const configureStore = () => createStore(mainReducer, initState, enhance);

export const store = configureStore();
