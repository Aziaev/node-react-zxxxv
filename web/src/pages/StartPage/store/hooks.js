import { isEmpty } from "lodash";
import { shallowEqual, useSelector } from "react-redux";
import Skeleton from "../../../components/Skeleton";
import { LOGIN_PAGE_ROUTE } from "../../Login";
import { userSelector } from "./selectors";

export default function useCheckUserHook() {
  const user = useSelector(userSelector, shallowEqual);

  if (isEmpty(user)) {
    window.location = LOGIN_PAGE_ROUTE;
    return <Skeleton />;
  }
}
