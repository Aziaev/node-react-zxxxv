import { Button, Classes, H1 } from "@blueprintjs/core";
import { isEmpty } from "lodash";
import Skeleton from "../../components/Skeleton";
import useCheckUserHook from "../StartPage/store/hooks";

export default function Home() {
  const data = null;
  useCheckUserHook();

  if (isEmpty(data)) {
    return <Skeleton />;
  }

  return (
    <>
      <H1>Home Analytical applications</H1>
      <p>
        User interfaces that enable people to interact smoothly with data, ask
        better questions, and make better decisions.
      </p>
      <Button text="Explore products" className={Classes.BUTTON} />
    </>
  );
}

export const homePageRoute = "/home";
