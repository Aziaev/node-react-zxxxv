import { FormGroup, Intent } from "@blueprintjs/core";
import styled from "styled-components";
import { INTENT_DANGER_COLOR } from "../../constants/style";

export const StyledValidatedFormGroup = styled(FormGroup)`
  label,
  span {
    color: ${({ intent }) => intent === Intent.DANGER && INTENT_DANGER_COLOR};
  }
`;
