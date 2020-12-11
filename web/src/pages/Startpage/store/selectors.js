import { get } from "lodash";

export function userSelector(state) {
  return get(state, "app.user");
}
