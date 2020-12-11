import { all } from "redux-saga/effects";
import { appSaga } from "../pages/Startpage/store/sagas";

export default function* saga() {
  yield all([appSaga()]);
}
