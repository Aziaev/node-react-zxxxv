import { loginPageRoute } from "../pages/Login";
import { startPageRoute } from "../pages/StartPage";
import { HTTPStatuses } from "./API";

export function getNextRouteByStatus({ status }) {
  switch (status) {
    case HTTPStatuses["401"]:
      return loginPageRoute;
    case HTTPStatuses["500"]:
      return startPageRoute;
    default:
      return startPageRoute;
  }
}
