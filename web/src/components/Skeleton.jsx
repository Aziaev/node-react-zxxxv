import { Button, Classes, H1 } from "@blueprintjs/core";

export default function Skeleton() {
  return (
    <>
      <H1 className={Classes.SKELETON}>Skeleton header</H1>
      <p className={Classes.SKELETON}>
        Skeleton body body body body body body body body body body body body
        body body body body body body body body body body body body body.
      </p>
      <Button text="Skeleton button" className={Classes.SKELETON} />
    </>
  );
}
