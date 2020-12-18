import { Button, Classes, H5 } from "@blueprintjs/core";

export default function Home() {
  return (
    <>
      <H5>
        <a href="#">Home Analytical applications</a>
      </H5>
      <p>
        User interfaces that enable people to interact smoothly with data, ask
        better questions, and make better decisions.
      </p>
      <Button text="Explore products" className={Classes.BUTTON} />
    </>
  );
}

export const homePageRoute = "/home";
