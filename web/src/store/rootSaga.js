import { all } from "redux-saga/effects";
import { appSaga } from "../pages/StartPage/store/sagas";

export default function* rootSaga() {
  yield all([appSaga()]);
}
