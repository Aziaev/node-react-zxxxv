import { Button, Classes, InputGroup, Intent } from "@blueprintjs/core";
import { push } from "connected-react-router";
import { FORM_ERROR } from "final-form";
import { useEffect } from "react";
import { Field, Form } from "react-final-form";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { StyledValidatedFormGroup } from "../../components/forms/StyledValidatedFormGroup";
import { StyledErrorCallout } from "../../components/StyledErrorCallout";
import { StyledProgressBar } from "../../components/StyledProgressBar";
import { APIRestUrls } from "../../constants/restUrls";
import API from "../../utils/API";
import { extractValidationErrors } from "../../utils/errors";
import { START_PAGE_ROUTE } from "../StartPage";
import { appActions } from "../StartPage/store/actions";
import { userSelector } from "../StartPage/store/selectors";

export default function Register() {
  const user = useSelector(userSelector, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appActions.flushUser());
  }, [dispatch]);

  async function onSubmit(values) {
    try {
      await API.post({
        url: APIRestUrls.register,
        body: values,
      })();
      dispatch(push(START_PAGE_ROUTE));
    } catch (e) {
      appActions.setAppError(e);

      const validationErrors = extractValidationErrors(e);
      if (validationErrors) {
        return validationErrors;
      }

      return { [FORM_ERROR]: e.message || "Something went wrong.." };
    }
  }

  if (user) {
    return (
      <>
        <h1>You are registered!</h1>
        <p>We've sent confirmation email to {`${user.email}`}.</p>
        <p>Please, check your email.</p>
      </>
    );
  }

  return (
    <Form
      initialValues={{}}
      onSubmit={onSubmit}
      render={(props) => {
        const { handleSubmit, submitError, submitting } = props;

        return (
          <div style={{ width: "30%" }}>
            <h1>Registration</h1>
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
            <Field name="name">
              {({ input, meta }) => {
                const error = (meta.touched && meta.error) || meta.submitError;

                return (
                  <StyledValidatedFormGroup
                    label="Name"
                    labelFor="text-input-name"
                    labelInfo={error && error}
                    intent={error && Intent.DANGER}
                  >
                    <InputGroup
                      {...input}
                      type="text"
                      id="text-input-name"
                      placeholder="Your name"
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
            <Field name="passwordConfirmation">
              {({ input, meta }) => {
                const error = (meta.touched && meta.error) || meta.submitError;

                return (
                  <StyledValidatedFormGroup
                    label="Password"
                    labelFor="text-input-password-confirmation"
                    labelInfo={error && error}
                    intent={error && Intent.DANGER}
                  >
                    <InputGroup
                      {...input}
                      type="password"
                      id="text-input-password-confirmation"
                      placeholder="Confirm password"
                      disabled={submitting}
                      intent={error && Intent.DANGER}
                    />
                  </StyledValidatedFormGroup>
                );
              }}
            </Field>
            <Button
              text="Register"
              onClick={handleSubmit}
              className={Classes.BUTTON}
              disabled={submitting}
            />
            {submitting && <StyledProgressBar intent={Intent.SUCCESS} />}
            {submitError && (
              <StyledErrorCallout
                intent={Intent.DANGER}
                title={"Registration error"}
              >
                {submitError}
              </StyledErrorCallout>
            )}
          </div>
        );
      }}
    />
  );
}

export const REGISTER_PAGE_ROUTE = "/register";
