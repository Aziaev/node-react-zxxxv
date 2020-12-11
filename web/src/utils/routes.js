import { HTTPStatuses } from "./API";

export function openNextByStatus({ status }) {
  switch (status) {
    case HTTPStatuses["401"]:
      window.location = "/login";
      break;
    default:
      return;
  }
}
