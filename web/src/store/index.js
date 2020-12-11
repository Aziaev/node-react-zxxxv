import { applyMiddleware, combineReducers, createStore } from "redux";
import startPageReducer from "../pages/Startpage/store";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

let store;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  app: startPageReducer,
});

export default function getStore() {
  if (!store) {
    store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);
  }
  return store;
}
