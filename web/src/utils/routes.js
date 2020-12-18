import { LOGIN_PAGE_ROUTE } from "../pages/Login";
import { START_PAGE_ROUTE } from "../pages/StartPage";
import { HTTPStatuses } from "./API";

export function getNextRouteByStatus({ status }) {
  switch (status) {
    case HTTPStatuses["401"]:
      return LOGIN_PAGE_ROUTE;
    case HTTPStatuses["500"]:
      return START_PAGE_ROUTE;
    default:
      return START_PAGE_ROUTE;
  }
}
