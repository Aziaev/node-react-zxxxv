import { Button, Classes, H5 } from "@blueprintjs/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { appActions } from "./store/actions";

export default function Startpage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.fetchUser());
  }, [dispatch]);

  return (
    <>
      <H5>
        <a href="#">Startpage</a>
      </H5>
      <p>
        StartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpageStartpage.
      </p>
      <Button text="Explore products" className={Classes.BUTTON} />
    </>
  );
}
