import { appActionTypes } from "./actions";

export const APP_STATE_NEW = "NEW";
export const APP_STATE_IS_LOADING = "IS_LOADING";
export const APP_STATE_READY = "READY";
export const APP_STATE_ERROR = "ERROR";

const initialState = {
  user: null,
  state: APP_STATE_NEW,
  error: null,
};

export default function startPageReducer(state = initialState, action) {
  switch (action.type) {
    case appActionTypes.FETCH_USER:
      return {
        ...state,
        state: APP_STATE_IS_LOADING,
        user: null,
        error: null,
      };

    case appActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        state: APP_STATE_READY,
        user: action.payload,
      };

    case appActionTypes.FETCH_USER_ERROR:
      return {
        ...state,
        state: APP_STATE_ERROR,
        error: action.payload,
      };

    default:
      return state;
  }
}
