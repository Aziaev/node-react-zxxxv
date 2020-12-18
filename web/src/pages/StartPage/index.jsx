import { Button, Classes, H1 } from "@blueprintjs/core";
import { isEmpty } from "lodash";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { appActions } from "./store/actions";
import { userSelector } from "./store/selectors";

export default function StartPage() {
  const user = useSelector(userSelector, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(user)) {
      dispatch(appActions.fetchUser());
    }
  }, [dispatch, user]);

  return (
    <>
      <H1>Startpage</H1>
      <p>
        StartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpage.
      </p>
      <Button text="Explore products" className={Classes.BUTTON} />
    </>
  );
}

export const START_PAGE_ROUTE = "/";
