import { applyMiddleware, combineReducers, createStore } from "redux";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import startPageReducer from "../pages/StartPage/store";

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

export const store = createStore(
  combineReducers({
    app: startPageReducer,
    router: connectRouter(history),
  }),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  )
);

sagaMiddleware.run(rootSaga);
