import { H1, Intent } from "@blueprintjs/core";
import { push } from "connected-react-router";
import { get } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { StyledErrorCallout } from "../../components/StyledErrorCallout";
import { APIRestUrls } from "../../constants/restUrls";
import API from "../../utils/API";
import { LOGIN_PAGE_ROUTE } from "../Login";

export default function EmailVerify(props) {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const search = get(props, "location.search");

  useEffect(() => {
    async function validateEmail() {
      try {
        await API.get({
          url: `${APIRestUrls.emailVerify}${search}`,
        })();
        dispatch(push(LOGIN_PAGE_ROUTE));
      } catch (e) {
        setError(e.message);
      }
    }

    validateEmail();
  }, [dispatch, search]);

  return (
    <>
      <H1>Email verification</H1>

      {error ? (
        <StyledErrorCallout title="Something went wrong" intent={Intent.DANGER}>
          {error}
        </StyledErrorCallout>
      ) : (
        <p>Wait for a moment</p>
      )}
    </>
  );
}

export const EMAIL_VERIFY_PAGE_ROUTE = "/me/emailVerification";
