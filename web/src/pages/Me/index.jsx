import { Button, Classes, H1 } from "@blueprintjs/core";
import { shallowEqual, useSelector } from "react-redux";
import { LOGIN_PAGE_ROUTE } from "../Login";
import { isEmpty } from "lodash";
import useCheckUserHook from "../StartPage/store/hooks";
import { userSelector } from "../StartPage/store/selectors";

export default function Me() {
  useCheckUserHook();
  const user = useSelector(userSelector, shallowEqual);

  if (isEmpty(user)) {
    window.location = LOGIN_PAGE_ROUTE;
  }

  return (
    <>
      <H1>{user.name}</H1>
      <p>
        User interfaces that enable people to interact smoothly with data, ask
        better questions, and make better decisions.
      </p>
      <Button text="Explore products" className={Classes.BUTTON} />
    </>
  );
}

export const ME_PAGE_ROUTE = "/me";
