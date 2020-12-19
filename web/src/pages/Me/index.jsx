import { FormGroup, H1, Intent } from "@blueprintjs/core";
import { isEmpty } from "lodash";
import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";
import { StyledErrorCallout } from "../../components/StyledErrorCallout";
import { LOGIN_PAGE_ROUTE } from "../Login";
import useCheckUserHook from "../StartPage/store/hooks";
import { userSelector } from "../StartPage/store/selectors";

export default function Me() {
  useCheckUserHook();
  const user = useSelector(userSelector, shallowEqual);

  if (isEmpty(user)) {
    window.location = LOGIN_PAGE_ROUTE;
  }

  return (
    <>
      <H1>{user.name}</H1>
      <StyledInlineFormGroup label="Name" inline>
        <StyledDiv>{user.name}</StyledDiv>
      </StyledInlineFormGroup>
      <StyledInlineFormGroup label="Email" inline>
        <StyledDiv>{user.email}</StyledDiv>
      </StyledInlineFormGroup>
      <StyledInlineFormGroup label="Created at" inline>
        <StyledDiv>{user.createdAt}</StyledDiv>
      </StyledInlineFormGroup>
      {!user.verifiedAt && (
        <StyledErrorCallout title="Verify your email" intent={Intent.WARNING}>
          We sent an email to you at {user.email}. It has a link to verify your
          email.
        </StyledErrorCallout>
      )}
    </>
  );
}

export const ME_PAGE_ROUTE = "/me";

const StyledDiv = styled.div`
  line-height: 30px;
`;

const StyledInlineFormGroup = styled(FormGroup)`
  margin: 0;

  .bp3-label {
    font-weight: bolder;
  }
`;
