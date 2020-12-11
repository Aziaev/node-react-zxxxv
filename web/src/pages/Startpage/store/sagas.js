import { call, put, takeEvery } from "redux-saga/effects";
import { appActions, appActionTypes } from "./actions";
import API from "../../../utils/API";
import { openNextByStatus } from "../../../utils/routes";

export function* appSaga() {
  yield takeEvery(appActionTypes.FETCH_USER, fetchUser);
}

function* fetchUser() {
  try {
    const user = yield call(API.get({ url: "/home" }));

    yield put(appActions.fetchUserSuccess(user));
  } catch ({ message, status }) {
    yield put(appActions.fetchUserError({ message, status }));
    openNextByStatus({ message, status });
  }
}
