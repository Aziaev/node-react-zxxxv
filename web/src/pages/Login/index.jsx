import { Button, Classes, H1, InputGroup, Intent } from "@blueprintjs/core";
import { push } from "connected-react-router";
import { FORM_ERROR } from "final-form";
import { useEffect } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { StyledValidatedFormGroup } from "../../components/forms/StyledValidatedFormGroup";
import { StyledErrorCallout } from "../../components/StyledErrorCallout";
import { StyledProgressBar } from "../../components/StyledProgressBar";
import { APIRestUrls } from "../../constants/restUrls";
import API from "../../utils/API";
import { extractValidationErrors } from "../../utils/errors";
import { REGISTER_PAGE_ROUTE } from "../Register";
import { START_PAGE_ROUTE } from "../StartPage";
import { appActions } from "../StartPage/store/actions";

export default function Login() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appActions.flushUser());
  }, [dispatch]);

  async function onSubmit(values) {
    // Clear existing cookie

    try {
      await API.post({
        url: APIRestUrls.login,
        body: values,
      })();
      dispatch(push(START_PAGE_ROUTE));
    } catch (e) {
      appActions.setAppError(e);

      const validationErrors = extractValidationErrors(e);
      console.log(validationErrors);

      if (validationErrors) {
        return validationErrors;
      }

      return { [FORM_ERROR]: e.message || "Something went wrong.." };
    }
  }

  return (
    <Form
      initialValues={{}}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitError, submitting, pristine, values }) => {
        return (
          <div style={{ width: "30%" }}>
            <H1>Login</H1>
            <Field name="email">
              {({ input, meta }) => {
                const error = (meta.touched && meta.error) || meta.submitError;

                return (
                  <StyledValidatedFormGroup
                    label="Email"
                    labelFor="text-input-email"
                    labelInfo={error && error}
                    intent={error && Intent.DANGER}
                  >
                    <InputGroup
                      {...input}
                      type="email"
                      id="text-input-email"
                      placeholder="Your email"
                      disabled={submitting}
                      intent={error && Intent.DANGER}
                    />
                  </StyledValidatedFormGroup>
                );
              }}
            </Field>
            <Field name="password">
              {({ input, meta }) => {
                const error = (meta.touched && meta.error) || meta.submitError;

                return (
                  <StyledValidatedFormGroup
                    label="Password"
                    labelFor="text-input-password"
                    labelInfo={error && error}
                    intent={error && Intent.DANGER}
                  >
                    <InputGroup
                      {...input}
                      type="password"
                      id="text-input-password"
                      placeholder="Your password"
                      disabled={submitting}
                      intent={error && Intent.DANGER}
                    />
                  </StyledValidatedFormGroup>
                );
              }}
            </Field>
            <Button
              text="Login"
              className={Classes.BUTTON}
              onClick={handleSubmit}
            />
            {submitting && <StyledProgressBar intent={Intent.SUCCESS} />}
            {submitError && (
              <StyledErrorCallout intent={Intent.DANGER}>
                {submitError}
              </StyledErrorCallout>
            )}
            <div style={{ paddingTop: "1rem" }}>
              <Link to={REGISTER_PAGE_ROUTE}>
                I have no account. Sign me up.
              </Link>
            </div>
          </div>
        );
      }}
    />
  );
}

export const LOGIN_PAGE_ROUTE = "/login";
