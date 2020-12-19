import { call, put, takeEvery } from "redux-saga/effects";
import { APIRestUrls } from "../../../constants/restUrls";
import API from "../../../utils/API";
import { appActions, appActionTypes } from "./actions";

export function* appSaga() {
  yield takeEvery(appActionTypes.FETCH_USER, fetchUser);
  yield takeEvery(appActionTypes.FLUSH_USER, flushUser);
}

function* fetchUser() {
  try {
    const user = yield call(API.get({ url: APIRestUrls.home }));
    yield put(appActions.fetchUserSuccess(user));
  } catch (e) {
    const { message, status } = e;
    yield put(appActions.fetchUserError({ message, status }));
  }
}

function* flushUser() {
  try {
    yield call(API.post({ url: APIRestUrls.logout }));
  } catch (e) {
    const { message, status } = e;
    yield put(appActions.fetchUserError({ message, status }));
  }
}
