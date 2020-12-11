import { Button, Classes, H5 } from "@blueprintjs/core";

export default function Me() {
  return (
    <>
      <H5>
        <a>Me</a>
      </H5>
      <p>
        User interfaces that enable people to interact smoothly with data, ask
        better questions, and make better decisions.
      </p>
      <Button text="Explore products" className={Classes.BUTTON} />
    </>
  );
}
