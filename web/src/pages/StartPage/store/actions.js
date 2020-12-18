export const appActionTypes = {
  FETCH_USER: "FETCH_USER",
  FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
  FETCH_USER_ERROR: "FETCH_USER_ERROR",
  FLUSH_USER: "FLUSH_USER",
  APP_STATE_IS_LOADING: "APP_STATE_IS_LOADING",
  APP_STATE_READY: "APP_STATE_READY",
  APP_STATE_ERROR: "APP_STATE_ERROR",
};

export const appActions = {
  fetchUser() {
    return { type: appActionTypes.FETCH_USER };
  },
  fetchUserSuccess(user) {
    return { type: appActionTypes.FETCH_USER_SUCCESS, payload: user };
  },
  fetchUserError(error) {
    return { type: appActionTypes.FETCH_USER_ERROR, payload: error };
  },
  flushUser() {
    return { type: appActionTypes.FLUSH_USER };
  },
  setAppIsLoading() {
    return { type: appActionTypes.APP_STATE_IS_LOADING };
  },
  setAppIsReady() {
    return { type: appActionTypes.APP_STATE_READY };
  },
  setAppError() {
    return { type: appActionTypes.APP_STATE_ERROR };
  },
};
