import {
  Button,
  Classes,
  FormGroup,
  InputGroup,
  Switch,
} from "@blueprintjs/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { appActions } from "../Startpage/store/actions";
import { Form } from "react-final-form";

export default function Login() {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appActions.flushUser());
  }, [dispatch]);

  async function onSubmit(values) {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  }

  return (
    <Form
      initialValues={{}}
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => {
        console.log({ handleSubmit, form, submitting, pristine, values });

        return (
          <div style={{ width: "30%" }}>
            <h1>Login</h1>
            <FormGroup
              helperText={"Helper text with details..."}
              label="Email"
              labelFor="text-input-email"
              labelInfo={"(required)"}
            >
              <InputGroup
                id="text-input-email"
                placeholder="Your email"
                disabled={false}
              />
            </FormGroup>
            <FormGroup
              helperText={"Helper text with details..."}
              label="Password"
              labelFor="text-input-password"
              labelInfo={"(required)"}
            >
              <InputGroup
                id="text-input-password"
                placeholder="Your password"
                type="password"
                disabled={false}
              />
            </FormGroup>
            <Button text="Login" className={Classes.BUTTON} />
            <div style={{ paddingTop: "1rem" }}>
              <a href="/register">I have no account. Sign me up.</a>
            </div>
          </div>
        );
      }}
    />
  );
}
